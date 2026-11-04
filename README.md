# 从零认识 AI Infra

离线 HTML 动画课程，共 6 章、40 页、364 个教学状态。讲稿和课件字幕由同一份内容生成。本版口播预计录制时长 81 分 23 秒，包含换画和观察停顿，实际时长以试录为准。

## 打开课件录制

用桌面 Chrome 打开 `ai-infra-course/index.html`。默认进入录制提词模式，底部每次显示一行字幕。读完一行按 Space。当前画面还有字幕时，只换字幕。读完最后一行再按 Space，进入下一教学状态。读完本页最后一个状态的字幕后，同样用 Space 翻页。

| 按键 | 操作 |
|---|---|
| Space / Backspace | 下一条 / 上一条字幕，到达当前状态的边界后切换画面 |
| R / P | 重播当前动作并回到第一条字幕 / 暂停或继续 |
| ← / → | 翻页并恢复该页上次的位置 |
| H / N | 切换录制与讲师模式 / 打开或收起讲师提示 |
| V / F | 切换纯画面 / 全屏 |
| 1–6 / G / T | 跳章节 / 讲师模式下打开目录 / 轮看 S02、S03、S05 |

讲师模式可查看当前状态的完整口播、对应画面、下一段口播和来源。纯画面模式隐藏字幕及辅助信息，仍按同样的顺序推进。三种模式切换保留字幕位置。录制画布为 16:9，字幕位于底部专用区域。

讲稿标题里的 `049 · S04.1` 表示全课第 49 段，补录时用 `#S04/1` 定位到该状态的第一条字幕。画面页码按目录顺序计数。旧录制参数 `?record=1` 仍可用。用 `?mode=instructor` 或 `?mode=visual` 可直接打开其他模式。加 `?autoplay=1` 可按原有口播估时自动推进，P 同时暂停或继续动画和字幕计时。录制模式可用 `?record=1&autoplay=1`。

## 编辑与校验

- `ai-infra-course/content/course.json` 是统一编辑源。每页的 `steps` 按朗读顺序排列，`id` 是补录锚点。在 `narration` 字符串里用 `\n` 标记字幕切换的位置。讲师面板和讲稿将各行拼回完整口播，底部字幕逐行显示。
- 旧场景的部分状态通过 `frame` 复用一个画面，新增场景各步有独立画面。需要分段时，用 `phase` 指定该句播放的动画时间窗口，单位为毫秒。需要局部强调时，用 `focus` 指定图中文字或以 `$` 开头的 CSS 选择器。浏览器回退和链接定位恢复该句的结束画面。
- `AI_Infra_完整口播稿.docx`、`ai-infra-course/content/口播稿.md` 与 `ai-infra-course/assets/course-data.js` 均为生成文件。

从项目根目录运行下列命令。生成 Word 需要 Python 和 `python-docx`。只更新浏览器数据时，可单独运行 `sync_content.py`。

```sh
python3 ai-infra-course/scripts/build_materials.py
python3 ai-infra-course/scripts/validate_content.py
```

场景仍按主题放在 `assets/scene-*.js` 和 `assets/scenes-*.js` 中。播放器在 `assets/player.js`，画布、字幕及模式样式在 `assets/pilot.css`。图中的容量、节拍和监控数值均为教学示意。

```sh
node ai-infra-course/scripts/verify_browser.cjs
```

浏览器检查使用 Playwright。可用 `PLAYWRIGHT_MODULE` 指定模块路径，`CHROME_PATH` 指定 Chrome。截图默认写入系统临时目录，也可通过 `QA_OUTPUT_DIR` 指定位置。

[课程升级报告](ai-infra-course/content/课程升级报告.md)记录此前的内容扩充。[知识覆盖清单](ai-infra-course/content/知识覆盖清单.md)列出主讲、简述及扩展主题。原始版本保存在 Git 提交 `afef6d3`。
