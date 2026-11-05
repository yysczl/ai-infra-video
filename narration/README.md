
## 用本人声线离线导出 MP4

这套流程使用你认可的第二次补录。模型、参考音频和对应台词、Python 安装包、Python、Node.js、Playwright 和 Chrome 都在 `narration/` 里。FFmpeg 随 `imageio-ffmpeg` 安装包提供。需要搭载 Apple 芯片的 Mac 和 macOS 26 或更新版本。安装后 `narration/` 约占 6.6 GB，导出时还需要给临时画面和成片留出空间。

### 安装或重建运行环境

在项目根目录执行。脚本用 `narration/wheels/` 中锁定版本的安装包重建 `narration/.venv/`，全程离线。复制项目到另一台符合条件的 Mac 或移动项目目录后，也运行这一条。

```sh
bash narration/setup.sh
```

### 导出指定内容

在同一个目录运行对应命令。第一个参数可以是课件的小节编号、章节号 `1` 至 `6`，或代表全片的 `all`。第二个参数是 MP4 的保存位置，换一个文件名即可重复导出。

```sh
# 导出 S37 投机解码
bash narration/export.sh S37 narration/output/S37.mp4

# 导出 S22 量化与推理优化
bash narration/export.sh S22 narration/output/S22.mp4

# 导出第 4 章
bash narration/export.sh 4 narration/output/第4章.mp4

# 按课件顺序导出全部 6 章、40 个小节，合成一个 MP4
bash narration/export.sh all narration/output/AI_Infra_全课.mp4
```

每次导出会先从 `ai-infra-course/content/course.json` 更新课件字幕，再逐条合成旁白。脚本用每条旁白的实际时长安排字幕和动画，默认输出 **1920 × 1080**、25 fps 的 H.264 视频和 AAC 音轨。逐条合成便于对齐字幕，句与句之间的语气可能与整段试音略有差异。

要输出 **3840 × 2160**，在小节编号、章节号或 `all` 前加 `--4k`。4K 用双倍像素密度渲染课件，导出时间和临时磁盘占用都会增加。

```sh
bash narration/export.sh --4k S37 narration/output/S37_4K.mp4
```

对比试音或用另一段参考录音导出视频，见[对比自己的不同参考录音](#对比自己的不同参考录音)。

模型为试音所用的 [Qwen3-TTS 1.7B Base BF16 MLX 版本](https://huggingface.co/mlx-community/Qwen3-TTS-12Hz-1.7B-Base-bf16)，权重随项目保存在 `narration/models/`。

迁移时复制整个项目目录，连同 `narration/` 里的 `models/`、`runtime/`、`voice/` 和 `wheels/`。这些目录保存在本地，已被 Git 忽略。安装脚本可以重新生成 `narration/.venv/`。

# 试音与更换参考录音

以下命令均在项目根目录运行。安装和重建运行环境见[上文](#安装或重建运行环境)。

## 对比自己的不同参考录音

每段录音配一份 UTF-8 逐字稿。比如把 `自然版.wav` 和 `自然版.txt` 放在 `narration/voice/`。逐字稿写的是**录音里实际说的话**，模型要朗读的课程台词由小节编号决定。录音可以选十几到几十秒，按你希望成片采用的语气录制。

用同一个小节、不同的输出文件名做对比。加 `--sample` 会把小节开头两个教学状态的台词连起来合成一段 WAV。

```sh
# 用项目默认的参考录音做对照
bash narration/export.sh --sample S37 narration/output/S37_默认.wav

# 用另一段录音读同一段台词
bash narration/export.sh --sample S37 narration/output/S37_自然版.wav \
  narration/voice/自然版.wav narration/voice/自然版.txt
```

## 用选好的参考录音导出课程视频

视频命令把参考录音和逐字稿加在输出路径后面。第一个参数照常用小节编号、章节号或 `all`。

```sh
bash narration/export.sh S37 narration/output/S37_自然版.mp4 \
  narration/voice/自然版.wav narration/voice/自然版.txt

bash narration/export.sh 4 narration/output/第4章_自然版.mp4 \
  narration/voice/自然版.wav narration/voice/自然版.txt

bash narration/export.sh all narration/output/AI_Infra_自然版.mp4 \
  narration/voice/自然版.wav narration/voice/自然版.txt
```

命令末尾的两个文件只用于当前这次导出。要长期换默认声线，把选好的录音和逐字稿分别保存为 `narration/voice/reference.wav` 和 `narration/voice/reference.txt`，其中默认音频应为 WAV。视频仍按字幕逐条合成，停连可能与整段试音略有差异。

## 给已导出的视频添加 BGM

在项目根目录执行，先填视频路径，再填 BGM 路径。路径里有空格时要加引号。命令使用项目自带的 FFmpeg，运行环境可用 `bash narration/setup.sh` 安装。

```sh
narration/.venv/bin/python narration/add_bgm.py \
  "narration/output/AI_Infra_全课.mp4" \
  "$HOME/Downloads/art-of-thought-siarate-main-version-42751-03-18.mp3"
```

默认在原视频旁生成 `AI_Infra_全课_BGM.mp4`。BGM 较短时会交叉淡化后循环，片头淡入、片尾淡出。原有音轨有声音时，BGM 会自动压低。画面直接复制到新文件，保留原编码和分辨率。

用 `-o` 指定另存路径，用 `--volume-db` 调整混音前的 BGM 音量。默认是 `-18` dB，改成 `-22` 会更轻，改成 `-14` 会更响。输出文件名需要可用。

```sh
narration/.venv/bin/python narration/add_bgm.py \
  "narration/output/第1章.mp4" "/你的路径/背景音乐.wav" \
  --volume-db -22 -o "narration/output/第1章_轻音乐.mp4"
```
