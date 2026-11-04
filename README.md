# 从零认识 AI Infra

离线 HTML 动画课程，共 6 章、29 页、287 句。讲稿和课件字幕由同一份内容生成。按自然语速估算约 44 分 33 秒，实际录制时长取决于语速和观察停顿。

## 打开课件录制

用桌面 Chrome 打开 `ai-infra-course/index.html`。默认进入录制提词模式，每页第一句随画面显示。读完一句按一次 Space，字幕和画面一起推进。读完一页也按 Space，下一页直接显示第一句。单句动画结束后停在结果。

| 按键 | 操作 |
|---|---|
| Space / Backspace | 下一句 / 上一句，支持跨页 |
| R / P | 重播当前动作 / 暂停或继续 |
| ← / → | 翻页并恢复该页上次的位置 |
| H / N | 切换录制与讲师模式 / 打开或收起讲师提示 |
| V / F | 切换纯画面 / 全屏 |
| 1–6 / G / T | 跳章节 / 讲师模式下打开目录 / 轮看 S02、S03、S05 |

讲师模式可查看当前句、对应画面、下一句和来源。纯画面模式隐藏字幕及辅助信息，可单独录制图示。三种模式切换保留口播位置。录制画布为 16:9，字幕位于底部专用区域。

可用 `#S07/3` 等链接直接定位补录。旧状态 `.0` 至 `.3` 保留，链接定位到原教学阶段的对应句子。新增编号从 `.4` 开始，播放顺序以讲述顺序为准。例如 `#S01/4` 接在 `#S01/1` 后面。旧录制参数 `?record=1` 仍可用。用 `?mode=instructor` 或 `?mode=visual` 可直接打开其他模式。

## 编辑与校验

- `ai-infra-course/content/course.json` 是统一编辑源。每页的 `steps` 按朗读顺序排列，`id` 是补录锚点，`narration` 同时用于字幕、提词器和讲稿正文。
- 原状态继续使用已有场景渲染，新句通过 `frame` 复用其中一个画面。需要分段时，用 `phase` 指定该句播放的动画时间窗口，单位为毫秒。需要局部强调时，用 `focus` 指定图中文字或以 `$` 开头的 CSS 选择器。浏览器回退和链接定位恢复该句的结束画面。
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
