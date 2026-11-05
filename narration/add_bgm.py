#!/usr/bin/env python3
"""Mix background music into a local video and save a separate MP4."""

import argparse
import math
import os
from pathlib import Path
import re
import subprocess
import tempfile
import wave

RATE = 48000


def probe_video(ffmpeg, video):
    # The offline bundle includes ffmpeg but does not need a separate ffprobe.
    info = subprocess.run(
        [ffmpeg, '-nostdin', '-hide_banner', '-i', str(video)],
        capture_output=True, text=True,
    ).stderr
    timestamp = re.search(r'Duration: (\d+):(\d+):(\d+(?:\.\d+)?)', info)
    video_streams = re.findall(r'^\s*Stream #0:[^\n]+Video:.*$', info, re.MULTILINE)
    if not timestamp or not any('attached pic' not in line for line in video_streams):
        raise ValueError('需要一个可读取、时长已知的视频文件。')
    hours, minutes, seconds = map(float, timestamp.groups())
    duration = hours * 3600 + minutes * 60 + seconds
    if duration <= 0:
        raise ValueError('视频时长必须大于零。')
    audio = re.search(r'^\s*Stream #0:[^\n]+Audio:.*$', info, re.MULTILINE)
    return duration, audio.group() if audio else None


def run_ffmpeg(ffmpeg, *args):
    subprocess.run([ffmpeg, '-nostdin', '-v', 'error', *map(str, args)], check=True)


def prepare_music(ffmpeg, music, work, duration):
    decoded = work / 'music.wav'
    run_ffmpeg(ffmpeg, '-i', music, '-map', '0:a:0', '-ar', RATE, '-ac', 2,
               '-c:a', 'pcm_s16le', decoded)
    with wave.open(str(decoded), 'rb') as wav:
        samples = wav.getnframes()
    if samples < RATE // 10:
        raise ValueError('BGM 至少需要 0.1 秒的音频。')
    if samples >= math.ceil(duration * RATE):
        return ['-i', decoded]

    overlap = min(6 * RATE, samples // 4)
    tail = samples - overlap
    loop = work / 'loop.wav'
    # The crossfade ends at the same point where the next cycle starts.
    filters = (
        '[0:a]asplit=3[a][b][c];'
        f'[a]atrim=start_sample={overlap}:end_sample={tail},asetpts=PTS-STARTPTS[mid];'
        f'[b]atrim=start_sample={tail},asetpts=PTS-STARTPTS[tail];'
        f'[c]atrim=end_sample={overlap},asetpts=PTS-STARTPTS[head];'
        f'[tail][head]acrossfade=ns={overlap}:c1=qsin:c2=qsin[seam];'
        '[mid][seam]concat=n=2:v=0:a=1[loop]'
    )
    run_ffmpeg(ffmpeg, '-i', decoded, '-filter_complex', filters, '-map', '[loop]',
               '-c:a', 'pcm_s16le', loop)
    return ['-stream_loop', '-1', '-i', loop]


def main():
    parser = argparse.ArgumentParser(description='给本地视频添加低音量 BGM，另存为 MP4。')
    parser.add_argument('video', type=Path, help='原视频路径')
    parser.add_argument('bgm', type=Path, help='BGM 音频路径')
    parser.add_argument('-o', '--output', type=Path, help='输出路径，默认在原视频旁生成 *_BGM.mp4')
    parser.add_argument('--volume-db', type=float, default=-18, help='BGM 的相对增益，默认 -18 dB')
    args = parser.parse_args()

    video = args.video.resolve()
    music = args.bgm.resolve()
    output = args.output or video.with_name(video.stem + '_BGM.mp4')
    if not video.is_file() or not music.is_file():
        parser.error('请检查视频和 BGM 路径。')
    if output.suffix.lower() != '.mp4' or output.exists() or output.is_symlink():
        parser.error('请指定一个尚不存在的 .mp4 输出路径。')
    if not math.isfinite(args.volume_db) or not -80 <= args.volume_db <= 0:
        parser.error('--volume-db 必须在 -80 到 0 之间。')

    from imageio_ffmpeg import get_ffmpeg_exe

    ffmpeg = get_ffmpeg_exe()
    try:
        duration, original_audio = probe_video(ffmpeg, video)
        output.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix='.bgm-', dir=output.parent) as directory:
            work = Path(directory)
            music_input = prepare_music(ffmpeg, music, work, duration)
            fade_in, fade_out = min(5, duration / 4), min(12, duration / 4)
            bed = (
                f'[1:a]atrim=duration={duration},asetpts=PTS-STARTPTS,'
                f'afade=t=in:d={fade_in},afade=t=out:st={duration - fade_out}:d={fade_out},'
                f'volume={args.volume_db}dB'
            )
            limiter = 'alimiter=limit=0.96:level=0:latency=1[mix]'
            filters = f'{bed},{limiter}'
            if original_audio:
                stereo = (
                    'pan=stereo|c0=c0|c1=c0'
                    if ', mono,' in original_audio else 'aformat=channel_layouts=stereo'
                )
                filters = (
                    f'[0:a:0]aresample={RATE}:async=1:first_pts=0,{stereo},'
                    f'apad,atrim=duration={duration},asplit=2[voice][side];'
                    f'{bed}[pad];'
                    '[pad][side]sidechaincompress=threshold=0.05:ratio=2.5:'
                    'attack=75:release=950[bed];'
                    f'[voice][bed]amix=inputs=2:duration=first:normalize=0,{limiter}'
                )

            result = work / 'mixed.mp4'
            run_ffmpeg(
                ffmpeg, '-i', video, *music_input, '-filter_complex', filters,
                '-map', '0:V:0', '-map', '[mix]', '-map_metadata', '0',
                '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', result,
            )
            # Publish the completed file without replacing a concurrent export.
            os.link(result, output)
    except (ValueError, OSError, subprocess.CalledProcessError) as error:
        parser.exit(1, f'混音失败：{error}\n')
    print(f'已导出 {output.resolve()}')


if __name__ == '__main__':
    main()
