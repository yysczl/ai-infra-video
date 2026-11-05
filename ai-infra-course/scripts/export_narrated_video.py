#!/usr/bin/env python3
"""Synthesize a local Qwen voice sample or export a narrated MP4."""

import argparse
import json
import os
from pathlib import Path
import subprocess
import tempfile
import wave

from sync_content import load_course


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('section', help='Scene ID, chapter number 1–6, or all')
    parser.add_argument('--model', type=Path, required=True, help='Local Qwen3-TTS Base model folder')
    parser.add_argument('--reference', type=Path, required=True, help='Reference recording')
    parser.add_argument('--reference-text', required=True, help='Exact transcript of the selected reference audio')
    parser.add_argument('--start', type=float, default=0, help='Reference start in seconds')
    parser.add_argument('--length', type=float, help='Reference length in seconds')
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument('--sample', action='store_true', help='Synthesize the first two cues as one WAV sample')
    mode.add_argument('--4k', dest='ultra_hd', action='store_true', help='Export at 3840×2160 instead of 1920×1080')
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    course = load_course()
    section = args.section.upper()
    slides = [
        slide for slide in course['slides']
        if section == 'ALL' or slide['id'] == section or str(slide['chapter']) == section
    ]
    if not slides:
        parser.error('section must be an existing scene ID, chapter number, or all')
    if args.sample and section != slides[0]['id']:
        parser.error('--sample requires a scene ID')
    extension = '.wav' if args.sample else '.mp4'
    if args.output.suffix.lower() != extension:
        parser.error(f'output must end in {extension}')
    if args.output.exists():
        parser.error('output already exists')
    if not args.reference.is_file() or not args.model.is_dir() or not args.reference_text.strip():
        parser.error('provide a local model folder, reference file and transcript')
    if args.start < 0 or (args.length is not None and args.length <= 0):
        parser.error('invalid reference time range')

    os.environ['HF_HUB_OFFLINE'] = '1'
    import mlx.core as mx
    from mlx_audio.tts.utils import load_model
    import numpy as np

    mx.random.seed(35)
    model = load_model(args.model.resolve())
    ffmpeg = os.environ.get('AI_INFRA_FFMPEG', 'ffmpeg')
    lines = []
    with tempfile.TemporaryDirectory(prefix='ai-infra-video-') as directory:
        work = Path(directory)
        trim = [] if args.length is None else ['-t', str(args.length)]
        subprocess.run([
            ffmpeg, '-nostdin', '-v', 'error', '-ss', str(args.start),
            '-i', str(args.reference.resolve()), *trim,
            '-ac', '1', '-ar', '24000', str(work / 'reference.wav')
        ], check=True)

        def pcm_for(text, label):
            parts = model.generate(
                text=text, lang_code='Chinese', max_tokens=540 if args.sample else 360,
                ref_audio=str(work / 'reference.wav'), ref_text=args.reference_text,
            )
            samples = np.concatenate([np.array(p.audio).reshape(-1) for p in parts])
            if not np.all(np.isfinite(samples)) or np.max(np.abs(samples)) < .005:
                raise RuntimeError(f'Invalid audio at {label}')
            return np.rint(np.clip(samples, -1, 1) * 32767).astype('<i2')

        if args.sample:
            sample_text = ''.join(step['narration'] for step in slides[0]['steps'][:2])
            with wave.open(str(work / 'sample.wav'), 'wb') as sample:
                sample.setparams((1, 2, model.sample_rate, 0, 'NONE', 'not compressed'))
                sample.writeframes(pcm_for(sample_text, section).tobytes())
            subprocess.run([
                ffmpeg, '-nostdin', '-v', 'error', '-i', str(work / 'sample.wav'),
                '-af', 'loudnorm=I=-19:TP=-2:LRA=7', '-ar', '24000',
                '-n', str(args.output.resolve()),
            ], check=True)
            print(f'已导出 {args.output.resolve()}')
            return

        with wave.open(str(work / 'narration.wav'), 'wb') as narration:
            rate = model.sample_rate
            narration.setparams((1, 2, rate, 0, 'NONE', 'not compressed'))
            for slide in slides:
                for step in slide['steps']:
                    print(f'合成 {step["id"]}', flush=True)
                    for index, caption in enumerate(step['captions']):
                        pcm = pcm_for(caption, f'{step["id"]}, caption {index + 1}')
                        pause = round(rate * (0.30 if index == len(step['captions']) - 1 else 0.12))
                        narration.writeframes(pcm.tobytes() + bytes(2 * pause))
                        lines.append({
                            'cue': step['id'], 'caption': index, 'text': caption,
                            'seconds': (len(pcm) + pause) / rate,
                        })
        (work / 'lines.json').write_text(json.dumps(lines, ensure_ascii=False), encoding='utf-8')
        subprocess.run([
            os.environ.get('NODE_PATH_FOR_EXPORT', 'node'),
            str(Path(__file__).with_name('capture_narration.cjs').resolve()),
            *(['--4k'] if args.ultra_hd else []),
        ], cwd=work, check=True)
        subprocess.run([
            ffmpeg, '-nostdin', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', 'timeline.txt',
            '-i', 'narration.wav', '-vf', 'fps=25,format=yuv420p',
            '-af', 'loudnorm=I=-19:TP=-2:LRA=7', '-ar', '48000',
            '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '16', '-c:a', 'aac', '-b:a', '128k',
            '-movflags', '+faststart', '-shortest', '-n', str(args.output.resolve()),
        ], cwd=work, check=True)
    print(f'已导出 {args.output.resolve()}')


if __name__ == '__main__':
    main()
