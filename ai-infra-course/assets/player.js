(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const data = window.COURSE;
  const pilots = { S02: 'concept', S03: 'atlas', S05: 'memory' };
  const states = data.slides.map(() => 0);
  const sceneIds = data.slides.map(slide => slide.id);
  const numberOf = cue => Number(cue.id.split('.')[1]);
  const positionOf = (slide, number) => slide.steps.findIndex(cue => numberOf(cue) === number);
  let page = 0, mode = 'recording', previousMode = 'recording';
  let paused = false, animations = [], suspended = [], toastTimer;

  function resize() {
    const dock = mode === 'instructor' ? $('controls').getBoundingClientRect().height + 22 : 0;
    const sidebar = $('notes').hidden ? 0 : $('notes').getBoundingClientRect().width + 44;
    const width = Math.max(1, innerWidth - sidebar), height = Math.max(1, innerHeight - dock);
    const k = Math.min(width / 1920, height / 1080);
    $('stage').style.transform = `translate(${(width - 1920 * k) / 2}px,${(height - 1080 * k) / 2}px) scale(${k})`;
  }

  function toast(message) {
    if (mode !== 'instructor') return;
    $('toast').textContent = message;
    $('toast').style.opacity = 1;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('toast').style.opacity = 0, 2200);
  }

  function cancel() {
    for (const animation of animations) {
      animation.onfinish = null;
      animation.cancel();
    }
    animations = [];
    suspended = [];
    paused = false;
    $('pause').textContent = '暂停';
    $('pause').classList.remove('active');
  }

  // Each cue can play a window of an existing scene. The clock shares the
  // animation timeline so pause, replay and the final freeze use one timebase.
  function playScene(scene, root, frame, beat, animate) {
    const effects = scene.mount?.(root, frame, {animate: true, previousStep: frame - 1}) || [];
    for (const effect of effects) {
      if (effect.effect.getTiming().iterations === Infinity) effect.effect.updateTiming({iterations: 1});
    }
    const duration = Math.max(0, ...effects.map(effect => effect.effect.getComputedTiming().endTime));
    const [start, end] = beat.phase || [0, duration];
    const freeze = () => {
      for (const effect of effects) {
        if (effect.effect.getComputedTiming().endTime > end) {
          effect.pause();
          effect.currentTime = end;
        }
      }
    };
    animations = effects;
    const run = animate && end > start && (!beat.focus || beat.phase);
    if (!run) {
      for (const effect of effects) {
        effect.pause();
        effect.currentTime = end;
      }
      return;
    }

    for (const effect of effects) effect.currentTime = start;
    if (end < duration) {
      const clock = root.animate([{}, {}], {duration: end - start});
      clock.onfinish = freeze;
      animations.push(clock);
    }
  }

  function markFocus(root, focus, animate) {
    if (!focus) return;
    const origin = root.getBoundingClientRect();
    const scale = origin.width / 1920;
    const labels = [...root.querySelectorAll('text, h2, h3, .f-code-line')];
    const marked = new Set();
    for (const target of focus) {
      const matches = target.startsWith('$')
        ? root.querySelectorAll(target.slice(1))
        : labels.filter(el => el.textContent.trim() === target);
      for (const el of matches) marked.add(el);
    }
    for (const el of marked) {
      if (el.checkVisibility?.({opacityProperty: true, visibilityProperty: true}) === false) continue;
      const box = el.getBoundingClientRect();
      if (!box.width || !box.height) continue;
      const outline = document.createElement('div');
      outline.className = 'cue-focus';
      outline.setAttribute('aria-hidden', 'true');
      outline.style.left = `${(box.left - origin.left) / scale - 6}px`;
      outline.style.top = `${(box.top - origin.top) / scale - 5}px`;
      outline.style.width = `${box.width / scale + 12}px`;
      outline.style.height = `${box.height / scale + 10}px`;
      root.append(outline);
      if (animate) animations.push(outline.animate([{opacity: .25}, {opacity: 1}], {duration: 320}));
    }
  }

  function render(animate = true) {
    const slide = data.slides[page], s = positionOf(slide, states[page]), beat = slide.steps[s];
    const frame = beat.frame ?? numberOf(beat);
    const scene = window.CourseScenes?.[slide.id] || window.PilotScenes?.[pilots[slide.id]];
    cancel();
    $('stage').classList.toggle('pilot', !!scene);
    $('stage').dataset.slide = slide.id;
    $('stage').dataset.cue = beat.id;
    $('title').textContent = slide.title;
    $('subtitle').textContent = slide.subtitle;
    $('slide-id').textContent = slide.id;
    $('chapter-label').textContent = `${String(slide.chapter).padStart(2, '0')} / ${data.chapters[slide.chapter - 1]}`;
    const root = $('diagram');
    root.innerHTML = scene ? scene.render(frame) : Diagrams.render(slide.kind, frame);
    root.setAttribute('aria-label', beat.label);
    if (scene) playScene(scene, root, frame, beat, animate);
    markFocus(root, beat.focus, animate);

    $('narration-caption').textContent = beat.narration;
    $('step-count').textContent = `第 ${s + 1} 句 / ${slide.steps.length}`;
    $('step-label').textContent = beat.label;
    $('step-description').textContent = slide.subtitle;
    $('step-rail').replaceChildren(...slide.steps.map((cue, index) => {
      const button = document.createElement('button');
      button.classList.toggle('done', index <= s);
      button.title = cue.label;
      button.setAttribute('aria-label', `第 ${index + 1} 句 ${cue.label}`);
      button.setAttribute('aria-current', index === s ? 'step' : 'false');
      button.dataset.step = numberOf(cue);
      return button;
    }));
    $('page-count').textContent = `${page + 1} / ${data.slides.length}`;
    $('prev').disabled = page === 0;
    $('next').disabled = page === data.slides.length - 1;
    $('back').disabled = page === 0 && s === 0;
    $('step').disabled = page === data.slides.length - 1 && s === slide.steps.length - 1;
    $('chapters').value = slide.chapter;
    $('outline-grid').querySelectorAll('[data-page]').forEach(button =>
      button.setAttribute('aria-current', +button.dataset.page === page ? 'page' : 'false'));
    $('progress').style.width = `${((page + (s + 1) / slide.steps.length) / data.slides.length) * 100}%`;
    const active = [null, 0, 1, 2, 2, 3, 4][slide.chapter];
    $('mini-map').innerHTML = ['硬件', '计算软件', '模型执行', '服务平台', '应用']
      .map((label, i) => i === active ? `<b>${label}</b>` : label).join(' <span> / </span> ');

    const next = slide.steps[s + 1] || data.slides[page + 1]?.steps[0];
    $('notes-title').textContent = `${slide.title} · ${s + 1}/${slide.steps.length}`;
    $('notes-text').textContent = beat.narration;
    $('notes-context').textContent = beat.label;
    $('notes-cue').textContent = next?.narration || '全课结束。';
    $('notes-sources').replaceChildren(...slide.sources.map(key => {
      const ref = data.references[key], link = document.createElement('a');
      link.href = ref.url;
      link.textContent = ref.title;
      link.target = '_blank';
      link.rel = 'noopener';
      return link;
    }));
    $('notes').scrollTop = 0;
    history.replaceState(null, '', `#${slide.id}/${numberOf(beat)}`);
    resize();
  }

  function goto(nextPage) {
    if (!Number.isInteger(nextPage) || nextPage < 0 || nextPage >= data.slides.length || nextPage === page) return;
    page = nextPage;
    render(false);
  }

  function step(delta) {
    const slide = data.slides[page];
    const next = slide.steps[positionOf(slide, states[page]) + delta];
    if (next) {
      states[page] = numberOf(next);
    } else {
      const nextSlide = data.slides[page + delta];
      if (!nextSlide) return;
      page += delta;
      states[page] = numberOf(delta > 0 ? nextSlide.steps[0] : nextSlide.steps.at(-1));
    }
    render(delta > 0);
  }

  function pause() {
    if (paused) {
      suspended.forEach(animation => {
        if (animation.playState === 'paused') animation.play();
      });
      suspended = [];
    } else {
      suspended = animations.filter(animation => animation.playState === 'running');
      suspended.forEach(animation => animation.pause());
    }
    paused = !paused;
    $('pause').textContent = paused ? '继续' : '暂停';
    $('pause').classList.toggle('active', paused);
  }

  function replay() { render(true); }

  function setMode(next) {
    mode = next;
    document.body.classList.toggle('recording', mode === 'recording');
    document.body.classList.toggle('visual-only', mode === 'visual');
    $('notes').hidden = mode !== 'instructor';
    if (mode !== 'instructor') {
      $('outline').close();
      $('toast').style.opacity = 0;
      clearTimeout(toastTimer);
      document.activeElement?.blur();
    }
    resize();
  }

  function record() { setMode(mode === 'recording' ? 'instructor' : 'recording'); }
  function visualOnly() {
    if (mode === 'visual') setMode(previousMode);
    else {
      previousMode = mode;
      setMode('visual');
    }
  }
  function notes() {
    if (mode !== 'instructor') setMode('instructor');
    else {
      $('notes').hidden = !$('notes').hidden;
      resize();
    }
  }
  function outline() {
    if (mode !== 'instructor') return;
    if ($('outline').open) $('outline').close();
    else {
      $('outline').showModal();
      $('outline').querySelector(`[data-page="${page}"]`)?.focus();
    }
  }
  function nextPilot() {
    const pages = Object.keys(pilots).map(id => sceneIds.indexOf(id));
    goto(pages.find(p => p > page) ?? pages[0]);
  }
  async function full() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      toast('请使用浏览器的全屏菜单');
    }
  }

  const actions = {
    prev: () => goto(page - 1), next: () => goto(page + 1), back: () => step(-1), step: () => step(1),
    pause, replay, record, full, 'visual-only': visualOnly, 'notes-toggle': notes, 'outline-toggle': outline, pilots: nextPilot,
  };
  Object.entries(actions).forEach(([id, action]) => {
    $(id).onclick = event => { action(); event.currentTarget.blur(); };
  });
  $('notes-close').onclick = notes;
  $('outline-close').onclick = () => $('outline').close();
  $('outline-count').textContent = `${data.chapters.length} 章 · ${data.slides.length} 页`;
  $('outline-grid').innerHTML = data.chapters.map((chapter, i) => `<section><h3><span>0${i + 1}</span>${chapter}</h3>${data.slides.map((slide, index) =>
    slide.chapter === i + 1 ? `<button data-page="${index}"><span>${slide.id}</span>${slide.title}</button>` : '').join('')}</section>`).join('');
  $('outline-grid').onclick = event => {
    const button = event.target.closest('[data-page]');
    if (button) { $('outline').close(); goto(+button.dataset.page); }
  };
  $('chapters').innerHTML = data.chapters.map((label, i) => `<option value="${i + 1}">${i + 1}. ${label}</option>`).join('');
  const chapter = value => goto(data.slides.findIndex(slide => slide.chapter === value));
  $('chapters').onchange = event => { chapter(+event.target.value); event.target.blur(); };
  $('step-rail').onclick = event => {
    const button = event.target.closest('[data-step]');
    if (button && +button.dataset.step !== states[page]) {
      states[page] = +button.dataset.step;
      render(false);
    }
  };

  const keys = {
    arrowright: actions.next, arrowleft: actions.prev, ' ': actions.step, backspace: actions.back,
    p: pause, r: replay, n: notes, f: full, h: record, v: visualOnly, t: nextPilot, g: outline,
  };
  window.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target.isContentEditable || event.target.closest?.('input, textarea, select')) return;
    const key = event.key.toLowerCase();
    if ($('outline').open && !['g', 'h', 'f', 'v'].includes(key)) {
      if (key === 'backspace' || (key === ' ' && !event.target.closest?.('button'))) event.preventDefault();
      return;
    }
    const action = Object.hasOwn(keys, key) ? keys[key] : /^[1-6]$/.test(key) ? () => chapter(+key) : null;
    if (!action) return;
    event.preventDefault();
    if (!event.repeat) action();
  });

  function readHash() {
    const match = location.hash.match(/^#(S\d{2})(?:\/(\d+))?$/);
    const index = match ? sceneIds.indexOf(match[1]) : -1;
    if (index < 0) return;
    const number = Number(match[2] || 0);
    page = index;
    states[page] = positionOf(data.slides[index], number) < 0 ? 0 : number;
  }
  readHash();
  const params = new URLSearchParams(location.search);
  const initialMode = params.get('mode');
  setMode(params.get('record') !== '1' && ['instructor', 'visual'].includes(initialMode) ? initialMode : 'recording');
  render(!location.hash || states[page] === 0);
  window.addEventListener('hashchange', () => { readHash(); render(false); });
  window.addEventListener('resize', resize);
  new ResizeObserver(resize).observe($('controls'));
  window.CoursePlayer = {
    getState: () => ({page, slideId: sceneIds[page], step: states[page], position: positionOf(data.slides[page], states[page]), cueId: `${sceneIds[page]}.${states[page]}`, paused, mode, recording: mode === 'recording'}),
    goto, step, render, states, pause, replay, record,
  };
})();
