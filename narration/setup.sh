#!/bin/bash
set -euo pipefail

bundle="$(cd "$(dirname "$0")" && pwd)"
if [[ "$(uname -s)" != Darwin || "$(uname -m)" != arm64 ]]; then
  echo "需要 Apple 芯片 Mac，并从原生 arm64 终端运行。" >&2
  exit 1
fi
if [[ "$(sw_vers -productVersion | cut -d. -f1)" -lt 26 ]]; then
  echo "随项目打包的 MLX 运行环境需要 macOS 26 或更新版本。" >&2
  exit 1
fi

"$bundle/runtime/python/bin/python3" -m venv --clear "$bundle/.venv"
"$bundle/.venv/bin/python" -m pip --isolated --disable-pip-version-check install \
  --no-index --no-cache-dir --only-binary=:all: --find-links "$bundle/wheels" \
  -r "$bundle/requirements.txt"
echo "项目内的离线环境已安装。"
