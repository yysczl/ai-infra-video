/* Offline browser QA. Set PLAYWRIGHT_MODULE, CHROME_PATH, or QA_OUTPUT_DIR as needed. */
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');

const output = process.env.QA_OUTPUT_DIR || fs.mkdtempSync(path.join(os.tmpdir(), 'ai-infra-qa-'));
const url = pathToFileURL(path.resolve(__dirname, '../index.html')).href;
fs.mkdirSync(output, {recursive: true});

(async () => {
  const browser = await chromium.launch({executablePath: process.env.CHROME_PATH});
  const context = await browser.newContext({viewport: {width: 1920, height: 1080}, offline: true});
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const press = key => page.keyboard.press(key);
  const caption = () => page.locator('#narration-caption').textContent();
  const state = () => page.evaluate(() => CoursePlayer.getState());
  const id = async () => (await state()).cueId;
  const shot = label => page.screenshot({path: path.join(output, label + '.png')});
  const visible = selector => page.locator(selector).isVisible();
  const count = selector => page.locator(selector).count();
  const go = async (cue, mode = '') => {
    const [scene, step] = cue.split('.');
    await page.goto(url + mode + '#' + scene + '/' + step);
    await page.waitForFunction(cue => CoursePlayer.getState().cueId === cue, cue);
  };
  const opacity = selector => page.locator(selector).evaluate(el => +getComputedStyle(el).opacity);
  const moving = () => page.evaluate(() => document.getAnimations().some(animation => animation.playState === 'running'));

  try {
    await page.goto(url);
    const slides = await page.evaluate(() => COURSE.slides);
    const order = slides.flatMap(slide => slide.steps);
    assert.equal(await id(), 'S01.0');
    assert.equal(await caption(), order[0].narration);
    assert.equal((await state()).mode, 'recording');
    assert.equal(await visible('#controls'), false);
    assert.equal(await visible('#notes'), false);
    await press('Backspace');
    assert.equal(await id(), 'S01.0');
    assert.equal(await page.evaluate(() => window.scrollY), 0);

    let checked = 0;
    for (const size of [{width: 1920, height: 1080}, {width: 1280, height: 720}]) {
      await page.setViewportSize(size);
      await go('S01.0');
      for (const [index, cue] of order.entries()) {
        if (index) await press('Space');
        const result = await page.evaluate(() => {
          const player = CoursePlayer.getState(), caption = document.getElementById('narration-caption');
          const text = document.createRange();
          text.selectNodeContents(caption);
          const textBox = text.getBoundingClientRect(), band = caption.getBoundingClientRect();
          const root = document.getElementById('diagram'), art = root.getBoundingClientRect();
          // Inspect settled geometry regardless of the length of this cue's motion.
          CoursePlayer.render(false);
          const outside = (box, area) => box.width && box.height &&
            (box.left < area.left - 1 || box.right > area.right + 1 ||
             box.top < area.top - 1 || box.bottom > area.bottom + 1);
          const overflow = [...root.querySelectorAll('svg text, h1, h2, .cue-focus')]
            .filter(el => el.checkVisibility({opacityProperty: true}) && outside(el.getBoundingClientRect(), art))
            .map(el => el.textContent);
          return {
            cueId: player.cueId, caption: caption.textContent, hash: location.hash,
            scroll: window.scrollY, clipped: outside(textBox, band) || art.bottom > band.top + 1,
            overflow, outlined: root.querySelectorAll('.cue-focus').length,
          };
        });
        assert.equal(result.cueId, cue.id);
        assert.equal(result.caption, cue.narration, cue.id);
        assert.equal(result.hash, '#' + cue.id.replace('.', '/'));
        assert.equal(result.scroll, 0, cue.id);
        assert.equal(result.clipped, false, cue.id);
        assert.deepEqual(result.overflow, [], cue.id);
        if (cue.focus) assert.ok(result.outlined > 0, cue.id + ' has a visible visual target');
        checked++;
        const slide = slides.find(slide => slide.id === cue.id.split('.')[0]);
        if (cue.id === slide.steps.at(-1).id) await shot(slide.id + '-' + size.height);
      }
      await press('Space');
      assert.equal(await id(), order.at(-1).id);
      await press('Backspace');
      assert.equal(await id(), order.at(-2).id);
    }

    const legacy = slides.flatMap(slide => Array.from({length: 4}, (_, i) => slide.id + '.' + i));
    for (const cue of legacy) {
      await go(cue);
      assert.equal(await caption(), order.find(beat => beat.id === cue).narration);
    }
    await page.setViewportSize({width: 1920, height: 1080});
    await go('S07.3', '?record=1');
    await page.reload();
    assert.equal(await id(), 'S07.3');
    assert.equal(await count('#diagram [data-foundation-slide="S07"][data-step="3"]'), 1);
    assert.equal((await state()).mode, 'recording');
    await shot('legacy-S07-3');

    await go('S01.0');
    await press('Space');
    assert.equal(await id(), 'S01.1');
    await page.waitForTimeout(700);
    assert.equal(await opacity('[data-opening-type="0"]'), 1);
    assert.equal(await page.locator('[data-opening-type="0"]').evaluate(el => +getComputedStyle(el.parentElement).opacity), 0);
    assert.equal(await moving(), false);
    await shot('S01-send');
    const nextCaption = await caption();
    await press('r');
    assert.equal(await id(), 'S01.1');
    assert.equal(await caption(), nextCaption);
    assert.equal(await moving(), true);
    await page.waitForTimeout(160);
    await press('p');
    assert.equal((await state()).paused, true);
    await page.waitForTimeout(550);
    assert.equal(await moving(), false);
    await press('p');
    assert.equal((await state()).paused, false);
    assert.equal(await moving(), true);
    await page.waitForTimeout(570);
    assert.equal(await moving(), false);
    assert.equal(await id(), 'S01.1');

    await page.keyboard.down('Space');
    assert.equal(await id(), 'S01.4');
    await page.keyboard.down('Space');
    await page.keyboard.up('Space');
    assert.equal(await id(), 'S01.4');
    await press('Backspace');
    assert.equal(await id(), 'S01.1');
    await press('Space');
    assert.equal(await id(), 'S01.4');
    await press('ArrowRight');
    assert.equal(await id(), 'S02.0');
    await press('ArrowLeft');
    assert.equal(await id(), 'S01.4');

    await go(slides[0].steps.at(-1).id);
    await press('Space');
    assert.equal(await id(), 'S02.0');
    await press('Backspace');
    assert.equal(await id(), slides[0].steps.at(-1).id);
    await page.evaluate(() => { location.hash = '#S16/2'; });
    await page.waitForFunction(() => CoursePlayer.getState().cueId === 'S16.2');
    await press('Space');
    await page.waitForTimeout(1450);
    assert.equal(await count('[data-kv-action="stored"]'), 6);
    assert.equal(await count('[data-kv-action="write"]'), 2);
    await shot('S16-write');
    await press('Space');
    assert.equal(await id(), 'S16.3');
    assert.equal(await count('[data-kv-read]'), 8);

    await press('h');
    assert.equal((await state()).mode, 'instructor');
    assert.equal(await visible('#notes'), true);
    assert.equal(await page.locator('#notes-text').textContent(), await caption());
    assert.equal(await page.locator('#notes-cue').textContent(), slides[15].steps.at(-2).narration);
    assert.equal(await count('#step-rail button'), slides[15].steps.length);
    assert.ok(await page.evaluate(() => {
      const stage = document.getElementById('stage').getBoundingClientRect();
      return stage.right < document.getElementById('notes').getBoundingClientRect().left &&
             stage.bottom < document.getElementById('controls').getBoundingClientRect().top;
    }));
    await shot('instructor');
    await press('v');
    assert.equal(await id(), 'S16.3');
    for (const selector of ['#narration-caption', '#notes', '#controls', '#step-rail']) {
      assert.equal(await visible(selector), false, selector);
    }
    await shot('visual-only');
    await press('Backspace');
    assert.equal(await id(), 'S16.5');
    await press('v');
    assert.equal((await state()).mode, 'instructor');
    assert.equal(await id(), 'S16.5');
    await page.locator('#step-rail [data-step="2"]').click();
    assert.equal(await id(), 'S16.2');
    await press('g');
    assert.equal(await count('#outline-grid [data-page]'), slides.length);
    await page.locator('#outline-grid [data-page="19"]').click();
    assert.equal(await id(), 'S20.0');
    await press('5');
    assert.equal(await id(), 'S23.0');
    for (const cue of ['S02.0', 'S03.0', 'S05.0']) {
      await press('t');
      assert.equal(await id(), cue);
    }
    assert.deepEqual(await page.evaluate(() => {
      const parent = document.createElement('div');
      parent.innerHTML = '<input><textarea></textarea><select><option>x</option></select><div contenteditable><span>x</span></div>';
      document.body.append(parent);
      const prevented = [...parent.querySelectorAll('input,textarea,select,span')].map(el =>
        [' ', 'Backspace', 'r', 'p'].some(key => !el.dispatchEvent(new KeyboardEvent('keydown', {key, bubbles: true, cancelable: true}))));
      parent.remove();
      return prevented;
    }), [false, false, false, false]);
    await press('h');
    assert.equal((await state()).mode, 'recording');
    for (const selector of ['#notes', '#controls', '#step-rail', '#toast', '#outline']) {
      assert.equal(await visible(selector), false, selector);
    }
    await press('f');
    await page.waitForFunction(() => !!document.fullscreenElement);
    await press('f');
    await page.waitForFunction(() => !document.fullscreenElement);

    await go('S08.2');
    assert.ok(await count('[data-transfer="standard-roundtrip"]'));
    assert.equal(await count('[data-transfer="onchip-reuse"]'), 0);
    await go('S08.3');
    assert.ok(await count('[data-transfer="onchip-reuse"]'));
    await go('S04.1');
    assert.equal(await count('[data-thread^="gpu-"]'), 6);
    await go('S18.3');
    assert.deepEqual(await page.locator('[data-logical-block][data-mapping]').evaluateAll(
      nodes => nodes.map(node => +node.dataset.mapping)), [2, 5, 1]);
    await go('S19.2');
    assert.equal(await count('[data-physical-block][data-owner="A"]'), 2);
    await go('S19.3');
    assert.equal(await count('[data-physical-block][data-owner="A"]'), 0);
    assert.equal(await count('[data-physical-block][data-owner="B"]'), 1);
    const shown = selector => page.locator(selector).evaluate(el => el.checkVisibility({opacityProperty: true}));
    assert.equal(await shown('[data-physical-block="2"][data-free="true"]'), true);
    assert.equal(await shown('[data-physical-block="2"][data-owner="C"]'), false);
    await go('S19.8');
    assert.equal(await shown('[data-physical-block="2"][data-free="true"]'), false);
    assert.equal(await shown('[data-physical-block="2"][data-owner="C"]'), true);
    await go('S20.1');
    const cDecode = '[data-batch-mode="continuous"][data-request="C"][data-round="2"]';
    assert.equal(await shown('[data-prefill-request="C"]'), true);
    assert.equal(await shown(cDecode), false);
    assert.equal(await count('[data-batch-mode="fixed"][data-request="C"][data-round="2"]'), 0);
    await shot('S20-prefill');
    await go('S20.5');
    assert.equal(await shown('[data-prefill-request="C"]'), false);
    assert.equal(await shown(cDecode), true);
    await shot('S20-join');
    await go('S20.2');
    assert.equal(await count('[data-live-status="running"][data-live-request="A"]'), 0);
    assert.equal(await count('[data-live-status="running"][data-live-request="C"]'), 1);
    await go('S26.3');
    assert.equal(await opacity('[data-motion="ready-only-request"]'), 0);
    await press('Space');
    await page.waitForFunction(() => +getComputedStyle(document.querySelector('[data-motion="ready-only-request"]')).opacity > 0);
    assert.equal(await opacity('.p-ready-label'), 1);
    await shot('S26-ready');
    await go('S27.2');
    assert.equal(await count('[data-time="0.8"], [data-time="1.1"]'), 2);
    await go('S28.2');
    assert.equal(await count('[data-concurrency="24"]'), 1);

    await go('S29.2');
    const liveCache = () => page.locator('[data-platform-window$=",12600"]').evaluateAll(nodes =>
      nodes.filter(node => +getComputedStyle(node).opacity === 1).length);
    assert.equal(await liveCache(), 5);
    await press('Space');
    await press('Space');
    await page.waitForTimeout(2250);
    assert.equal(await liveCache(), 6);
    await shot('S29-reply');
    await press('Space');
    await page.waitForTimeout(800);
    assert.equal(await liveCache(), 0);
    await shot('S29-release');

    assert.deepEqual(errors, []);
    console.log(JSON.stringify({scenes: slides.length, cues: order.length, checked, legacyLinks: legacy.length, output}, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
