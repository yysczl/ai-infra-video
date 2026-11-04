/* S03: each level has its own visual grammar; the spine shows responsibilities. */
(() => {
  'use strict';
  const colors = ['#bed6ae', '#ed8254', '#c7b8d9', '#bed6ae', '#f2efe7'];
  const Y = [658, 518, 363, 213, 73];
  const names = ['硬件', '计算软件', '模型执行', '服务平台', '应用'];
  const captions = [
    ['计算、存储、连接', '模型在处理器上计算，经由显存和互联读写、交换数据。'],
    ['计算软件', '计算库提供常用运算的实现。'],
    ['训练与推理', '框架和引擎组织模型的训练或推理。'],
    ['服务与应用', '平台部署模型服务，应用通过接口调用。']
  ];
  const txt = (x, y, str, size = 26, fill = '#f2efe7', extra = '') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${extra}>${str}</text>`;
  const path = (d, stroke = '#797c76', width = 1.5, extra = '') => `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
  const circle = (x, y, r, stroke, fill = 'none', extra = '') => `<circle cx="${x}" cy="${y}" r="${r}" stroke="${stroke}" fill="${fill}" ${extra}/>`;

  function chip(x, y, label, color, w = 88) {
    let pins = '';
    for (let i = 0; i < 5; i++) {
      const n = -24 + i * 12;
      pins += path(`M${x + n},${y - 45}v-10 M${x + n},${y + 45}v10 M${x - w / 2},${y + n}h-10 M${x + w / 2},${y + n}h10`, color, 2);
    }
    return `<g class="atlas-device">${pins}<rect x="${x - w / 2}" y="${y - 45}" width="${w}" height="90" rx="3" fill="#1b211d" stroke="${color}" stroke-width="1.5"/>${txt(x, y + 8, label, 25, color, 'text-anchor="middle" font-family="ui-monospace,monospace"')}</g>`;
  }

  function hardware() {
    let z = '';
    z += chip(274, 650, 'CPU', colors[0]);
    z += chip(462, 650, 'NPU', colors[0]);
    z += chip(674, 650, 'GPU', colors[0], 118);
    for (let row = 0; row < 3; row++) for (let col = 0; col < 5; col++) z += `<rect class="atlas-core" x="${630 + col * 18}" y="${675 + row * 7}" width="11" height="3" fill="${colors[0]}" opacity=".5"/>`;
    for (let n = 3; n >= 0; n--) z += `<path d="M870,${621 + n * 12}l42,-17 42,17 -42,18Z" fill="#1c251e" stroke="${colors[0]}" stroke-width="1.2"/>`;
    z += txt(912, 699, 'HBM', 24, colors[0], 'text-anchor="middle" font-family="ui-monospace,monospace"');
    z += path('M734,650H856', colors[0], 3) + path('M734,643H856 M734,657H856', colors[0], 1);
    z += txt(796, 622, '读写', 19, '#a3ad9d', 'text-anchor="middle"');
    z += path('M274,707v21H674v-21 M462,707v21', colors[0], 1.5);
    z += txt(476, 756, '设备互联 / 网络', 23, '#a3ad9d', 'text-anchor="middle"');
    z += txt(1082, 647, '物理资源', 28, colors[0]);
    z += txt(1082, 680, '计算 · 显存 · 连接', 22, '#92978f');
    return z;
  }

  function software() {
    let z = `<text x="234" y="524" class="atlas-mono" font-size="37" fill="${colors[1]}">CUDA</text>`;
    z += txt(235, 558, '并行计算平台', 23, '#a6a09a');
    z += path('M555,494l-24,19 24,19 M602,494l24,19 -24,19 M590,488l-20,50', colors[1], 2);
    z += txt(655, 524, 'Triton', 35, colors[1], 'font-family="ui-monospace,monospace"');
    z += txt(655, 558, '编写 GPU 内核', 23, '#a6a09a');
    z += txt(1012, 510, 'cuBLAS', 29, colors[1], 'font-family="ui-monospace,monospace"');
    z += txt(1012, 544, 'cuDNN', 29, colors[1], 'font-family="ui-monospace,monospace"');
    z += txt(1171, 527, '计算库', 23, '#a6a09a');
    z += path('M255,576v17H912v-17 M674,576v17 M274,593v7 M462,593v7 M674,593v7 M912,593v7', '#68533e', 1.5);
    return z;
  }

  function model() {
    let z = '';
    z += path('M414,336C355,304 303,334 309,375C315,411 363,419 388,391', colors[2], 1.8);
    z += path('M379,390l10,1 -1,10', colors[2], 1.8);
    z += circle(362, 365, 14, colors[2], '#39333f');
    z += txt(434, 353, '训练', 31, colors[2]);
    z += txt(434, 389, 'PyTorch', 28, '#e0d7e6', 'font-family="ui-monospace,monospace"');
    z += txt(434, 424, 'DeepSpeed · Megatron-LM', 21, '#a59ba9', 'font-family="ui-monospace,monospace"');
    z += path('M806,350h24 M806,365h41 M806,380h24 M842,350l16,15 -16,15', colors[2], 2.5);
    z += txt(900, 353, '推理', 31, colors[2]);
    z += txt(900, 389, 'vLLM · SGLang', 28, '#e0d7e6', 'font-family="ui-monospace,monospace"');
    z += txt(900, 424, 'TensorRT-LLM', 21, '#a59ba9', 'font-family="ui-monospace,monospace"');
    z += path('M585,444v23H1135v-23 M850,467v18', '#62586b', 1.5);
    return z;
  }

  function platform() {
    let z = '';
    // The cube is a runtime image; orchestration is a hub, not a tool dependency.
    z += path('M264,187l27,15v32l-27,16 -27,-16v-32Z M237,202l27,16 27,-16 M264,218v32', colors[3], 1.8);
    z += txt(314, 216, 'Docker', 31, colors[3], 'font-family="ui-monospace,monospace"');
    z += txt(314, 250, '封装运行环境', 22, '#a6af9e');
    z += circle(681, 216, 11, colors[3], '#384232');
    for (let i = 0; i < 5; i++) {
      const a = i * Math.PI * 2 / 5 - Math.PI / 2;
      const x = 681 + Math.cos(a) * 34, y = 216 + Math.sin(a) * 34;
      z += path(`M681,216L${x},${y}`, colors[3], 1.5) + circle(x, y, 4, colors[3], '#bed6ae');
    }
    z += txt(739, 216, 'Kubernetes', 29, colors[3], 'font-family="ui-monospace,monospace"');
    z += txt(739, 250, '部署与资源编排', 22, '#a6af9e');
    z += txt(1072, 216, 'Ray', 31, colors[3], 'font-family="ui-monospace,monospace"');
    z += txt(1072, 250, '分布式任务', 22, '#a6af9e');
    z += path('M264,269v19H1135v-19 M681,269v19 M585,288v19 M1060,288v19', '#4e5a48', 1.5);
    return z;
  }

  function app() {
    let z = '';
    z += circle(277, 65, 26, '#f2efe7') + circle(277, 58, 7, '#f2efe7') + path('M262,80q15,-20 30,0', '#f2efe7', 1.5);
    z += txt(330, 75, '聊天助手', 31);
    z += circle(600, 65, 2.5, '#7a7a73', '#7a7a73');
    z += txt(705, 75, 'AI Agent', 31, '#f2efe7', 'font-family="ui-monospace,monospace"');
    z += circle(965, 65, 2.5, '#7a7a73', '#7a7a73');
    z += txt(1050, 75, '业务应用', 31);
    z += txt(330, 111, '用户接触到的能力', 22, '#92968e');
    z += path('M680,127V147H1264V365H1190 M1197,358l-8,7 8,7', '#9c9e93', 1.5);
    z += txt(705, 129, 'API / 请求接入', 21, '#a3a79d', 'font-family="ui-monospace,monospace"');
    return z;
  }

  function render(step) {
    const current = Math.min(3, Math.max(0, step));
    const visible = current === 3 ? 4 : current;
    const makers = [hardware, software, model, platform, app];
    let svg = `<svg class="atlas-art" viewBox="0 0 1320 780" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;
    svg += `<defs><marker id="atlas-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0L8,4 0,8" fill="none" stroke="#bed6ae"/></marker></defs>`;
    svg += path('M156,665V70', '#343731', 1.5);
    svg += path(`M156,665V${Y[visible]}`, current === 1 ? colors[1] : current === 2 ? colors[2] : colors[0], 3, 'class="atlas-connected"');
    for (let i = 0; i < 5; i++) {
      const lit = i <= visible;
      const focus = current === i || current === 3 && i >= 3;
      const opacity = lit ? focus ? 1 : .85 : .15;
      svg += `<g class="atlas-level ${focus ? 'atlas-focus' : ''}" data-level="${i}" opacity="${opacity}">`;
      svg += txt(10, Y[i] - 5, `0${i + 1}`, 15, colors[i], 'font-family="ui-monospace,monospace" letter-spacing="2"');
      svg += txt(10, Y[i] + 25, names[i], 25, lit ? '#d0d0c5' : '#a6a69b');
      svg += circle(156, Y[i], focus ? 8 : 5, lit ? colors[i] : '#84887c', lit ? colors[i] : '#101113');
      svg += path(`M170,${Y[i]}H201`, lit ? colors[i] : '#51564d', 1.5);
      svg += makers[i]() + '</g>';
    }
    svg += `<circle class="atlas-signal" cx="156" cy="665" r="5" fill="${colors[Math.min(current, 3)]}" opacity="0"/>`;
    svg += '</svg>';
    return `<section class="atlas-scene" data-step="${current}" aria-label="AI Infra 技术全景图，${captions[current][0]}">
      <div class="atlas-masthead"><span>AI INFRA <i>/</i> 入门课</span><span>01 — AI Infra 解决什么问题</span><span>03 / ${window.COURSE.slides.length}</span></div>
      <div class="atlas-heading"><span class="atlas-overline">技术分层</span><h1>AI Infra<br>技术全景图<span>。</span></h1><p>常见工具按主要职责归类。</p></div>
      <div class="atlas-current"><h2>${captions[current][0]}</h2><p>${captions[current][1]}</p></div>
      ${svg}
      <div class="atlas-bottom"><span>硬件 → 执行 → 模型 → 服务 → 应用</span><span>按主要职责整理；工具可跨层、可替换</span></div>
    </section>`;
  }

  function mount(root, step, { animate } = {}) {
    const animations = [];
    const y = Y[step === 3 ? 4 : step];
    if (animate) {
      root.querySelectorAll('.atlas-focus').forEach(el => animations.push(el.animate([
        { opacity: .18, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 850, easing: 'cubic-bezier(.2,.7,.2,1)' })));
      const connected = root.querySelector('.atlas-connected');
      if (connected && step > 0) {
        const length = 665 - y;
        animations.push(connected.animate([{ strokeDasharray: `${length}`, strokeDashoffset: `${length}` }, { strokeDasharray: `${length}`, strokeDashoffset: '0' }], { duration: 1050, easing: 'ease-in-out' }));
      }
    }
    if (step > 0) {
      const signal = root.querySelector('.atlas-signal');
      animations.push(signal.animate([
        { transform: 'translateY(0)', opacity: 0, offset: 0 },
        { transform: 'translateY(0)', opacity: 1, offset: .08 },
        { transform: `translateY(${y - 665}px)`, opacity: 1, offset: .86 },
        { transform: `translateY(${y - 665}px)`, opacity: 0, offset: 1 }
      ], { duration: 2400, delay: animate ? 550 : 0, iterations: 3 }));
    }
    return animations;
  }
  window.PilotScenes ||= {};
  window.PilotScenes.atlas = { render, mount };
})();
