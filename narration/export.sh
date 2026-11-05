#!/bin/bash
set -euo pipefail

bundle="$(cd "$(dirname "$0")" && pwd)"
root="$(dirname "$bundle")"
mode=()
case "${1:-}" in
  --sample|--4k) mode=("$1"); shift ;;
esac
if [[ $# -ne 2 && $# -ne 4 ]]; then
  echo "用法：bash narration/export.sh [--4k] <小节编号 | 章节号 1–6 | all> <输出.mp4> [参考音频 逐字稿.txt]" >&2
  echo "试音：bash narration/export.sh --sample <小节编号> <输出.wav> [参考音频 逐字稿.txt]" >&2
  exit 2
fi
reference="${3:-$bundle/voice/reference.wav}"
transcript="${4:-$bundle/voice/reference.txt}"
if [[ ! -r "$reference" || ! -r "$transcript" ]]; then
  echo "无法读取参考音频或逐字稿，请检查路径。" >&2
  exit 1
fi
if [[ ! -x "$bundle/.venv/bin/python" ]]; then
  echo "先运行 bash narration/setup.sh 安装项目内的离线环境。" >&2
  exit 1
fi

python="$bundle/.venv/bin/python"
export NODE_PATH_FOR_EXPORT="$bundle/runtime/node/bin/node"
export PLAYWRIGHT_MODULE="$bundle/runtime/node/node_modules/playwright"
export CHROME_PATH="$bundle/runtime/Google Chrome.app/Contents/MacOS/Google Chrome"
export AI_INFRA_FFMPEG="$("$python" -c 'import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())')"
export PYTHONDONTWRITEBYTECODE=1
export HF_HUB_OFFLINE=1
export TMPDIR="$bundle/.work"

output="$2"
mkdir -p "$(dirname "$output")" "$TMPDIR"
if [[ "${mode[0]:-}" != --sample ]]; then
  "$python" "$root/ai-infra-course/scripts/sync_content.py"
fi
exec "$python" "$root/ai-infra-course/scripts/export_narrated_video.py" "$1" \
  --model "$bundle/models/Qwen3-TTS-12Hz-1.7B-Base-bf16" \
  --reference "$reference" \
  --reference-text "$(cat "$transcript")" \
  --output "$output" ${mode[@]+"${mode[@]}"}
