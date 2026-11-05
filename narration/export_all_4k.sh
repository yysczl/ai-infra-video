#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

sections=(all 1 2 3 4 5 6)
outputs=(narration/output/AI_Infra_全课.mp4)
for chapter in 1 2 3 4 5 6; do
  outputs+=("narration/output/第${chapter}章.mp4")
done

for output in "${outputs[@]}"; do
  if [[ -e "$output" || -L "$output" ]]; then
    printf '输出已存在，请先移走或重命名：%s\n' "$output" >&2
    exit 1
  fi
done

for i in "${!sections[@]}"; do
  printf '[%d/%d] 开始导出 %s\n' "$((i + 1))" "${#sections[@]}" "${outputs[i]}"
  bash narration/export.sh --4k "${sections[i]}" "${outputs[i]}"
done
