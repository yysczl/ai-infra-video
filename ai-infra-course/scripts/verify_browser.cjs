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
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => errors.push(request.url() + ': ' + request.failure().errorText));
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
    const slideById = Object.fromEntries(slides.map(slide => [slide.id, slide]));
    const order = slides.flatMap(slide => slide.steps);
    const byCue = Object.fromEntries(order.map(cue => [cue.id, cue]));
    const advance = async (key = 'Space') => {
      const {cueId, captionIndex} = await state();
      const presses = key === 'Space' ? byCue[cueId].captions.length - captionIndex : captionIndex + 1;
      for (let i = 0; i < presses; i++) await press(key);
    };
    const sameDiagram = () => page.evaluate(() => {
      const diagram = document.getElementById('diagram');
      return diagram.firstElementChild === window.previousDiagram && diagram.innerHTML === window.previousMarkup;
    });
    const rememberDiagram = () => page.evaluate(() => {
      const diagram = document.getElementById('diagram');
      window.previousDiagram = diagram.firstElementChild;
      window.previousMarkup = diagram.innerHTML;
    });
    assert.equal(slides.length, 40);
    assert.equal(order.length, 364);
    assert.equal(await id(), 'S01.0');
    assert.equal(await caption(), order[0].captions[0]);
    assert.equal((await state()).mode, 'recording');
    assert.equal(await visible('#controls'), false);
    assert.equal(await visible('#notes'), false);
    await press('Backspace');
    assert.equal(await id(), 'S01.0');
    assert.equal(await page.evaluate(() => window.scrollY), 0);

    let checked = 0, captionChecks = 0, maxCaptionWidth = 0;
    const layouts = [
      {width: 1920, height: 1080, mode: ''},
      {width: 1280, height: 720, mode: '?record=1'},
      {width: 1280, height: 720, mode: '?mode=instructor'},
    ];
    for (const {width, height, mode} of layouts) {
      await page.setViewportSize({width, height});
      await go('S01.0', mode);
      await page.evaluate(() => document.fonts.ready);
      for (const [index, cue] of order.entries()) {
        if (index) await press('Space');
        await rememberDiagram();
        for (const [captionIndex, expected] of cue.captions.entries()) {
          if (captionIndex) await press('Space');
          const result = await page.evaluate(() => {
            const {cueId, captionIndex} = CoursePlayer.getState();
            const caption = document.getElementById('narration-caption');
            const text = document.createRange();
            text.selectNodeContents(caption);
            const box = text.getBoundingClientRect(), band = caption.getBoundingClientRect();
            const style = getComputedStyle(caption), scale = band.width / caption.offsetWidth;
            const fits = box.left >= band.left + parseFloat(style.paddingLeft) * scale - .5 &&
              box.right <= band.right - parseFloat(style.paddingRight) * scale + .5 &&
              box.top >= band.top && box.bottom <= band.bottom;
            return {
              cueId, captionIndex, text: caption.textContent, fits, width: box.width / scale,
              lines: text.getClientRects().length, font: style.fontSize, height: style.height,
              whiteSpace: style.whiteSpace, inlineFont: caption.style.fontSize,
              hash: location.hash, notes: document.getElementById('notes-text').textContent,
            };
          });
          const label = `${cue.id} caption ${captionIndex + 1} at ${width}×${height} ${mode}`;
          assert.equal(result.cueId, cue.id, label);
          assert.equal(result.captionIndex, captionIndex, label);
          assert.equal(result.text, expected, label);
          assert.equal(result.notes, cue.narration, label);
          assert.equal(result.hash, '#' + cue.id.replace('.', '/'), label);
          assert.equal(result.fits, true, label);
          assert.equal(result.lines, 1, label);
          assert.equal(result.font, '46px', label);
          assert.equal(result.inlineFont, '', label);
          assert.equal(result.height, '140px', label);
          assert.equal(result.whiteSpace, 'nowrap', label);
          assert.equal(await sameDiagram(), true, label);
          maxCaptionWidth = Math.max(maxCaptionWidth, result.width);
          captionChecks++;
        }
        const result = await page.evaluate(() => {
          const player = CoursePlayer.getState(), caption = document.getElementById('narration-caption');
          const band = caption.getBoundingClientRect();
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
            folio: root.querySelector('[data-course-folio]')?.textContent, page: player.page,
            scroll: window.scrollY, overlapsCaption: art.bottom > band.top + 1,
            overflow, outlined: root.querySelectorAll('.cue-focus').length,
          };
        });
        assert.equal(result.folio, String(result.page + 1).padStart(2, '0') + ' / ' + slides.length, cue.id);
        assert.equal(result.scroll, 0, cue.id);
        assert.equal(result.overlapsCaption, false, cue.id);
        assert.deepEqual(result.overflow, [], cue.id);
        if (cue.focus) assert.ok(result.outlined > 0, cue.id + ' has a visible visual target');
        checked++;
        const slide = slideById[cue.id.split('.')[0]];
        if (!mode.includes('instructor') && cue.id === slide.steps.at(-1).id) await shot(slide.id + '-' + height);
      }
      await press('Space');
      assert.equal(await id(), order.at(-1).id);
      await advance('Backspace');
      assert.equal(await id(), order.at(-2).id);
      assert.equal(await caption(), order.at(-2).captions.at(-1));
    }

    for (const cue of order) {
      await go(cue.id);
      assert.equal(await caption(), cue.captions[0]);
    }
    await page.setViewportSize({width: 1920, height: 1080});
    await go('S07.3', '?record=1');
    await page.reload();
    assert.equal(await id(), 'S07.3');
    assert.equal(await count('#diagram [data-foundation-slide="S07"][data-step="3"]'), 1);
    assert.equal((await state()).mode, 'recording');
    await shot('legacy-S07-3');

    await go('S01.2');
    assert.equal(byCue['S01.2'].captions.length, 1);
    await press('Space');
    assert.equal(await id(), 'S01.7');
    await press('Backspace');
    assert.equal(await id(), 'S01.2');
    await go('S01.0');
    assert.ok(byCue['S01.0'].captions.length >= 3);
    await page.evaluate(() => CoursePlayer.render(false));
    const firstDiagram = await page.locator('#diagram').screenshot();
    await rememberDiagram();
    await press('Space');
    assert.equal(await caption(), byCue['S01.0'].captions[1]);
    await press('Space');
    assert.equal(await caption(), byCue['S01.0'].captions[2]);
    await press('Backspace');
    assert.equal(await caption(), byCue['S01.0'].captions[1]);
    assert.equal(await sameDiagram(), true);
    assert.ok(firstDiagram.equals(await page.locator('#diagram').screenshot()));
    await shot('single-line-S01');
    await advance();
    assert.equal(await id(), 'S01.1');
    await page.waitForTimeout(700);
    assert.equal(await opacity('[data-opening-type="0"]'), 1);
    assert.equal(await page.locator('[data-opening-type="0"]').evaluate(el => +getComputedStyle(el.parentElement).opacity), 0);
    assert.equal(await moving(), false);
    await shot('S01-send');
    await press('Space');
    assert.equal(await caption(), byCue['S01.1'].captions[1]);
    await press('r');
    assert.equal(await id(), 'S01.1');
    assert.equal(await caption(), byCue['S01.1'].captions[0]);
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

    await press('Space');
    assert.equal(await id(), 'S01.1');
    await page.keyboard.down('Space');
    assert.equal(await id(), 'S01.4');
    await page.keyboard.down('Space');
    await page.keyboard.up('Space');
    assert.equal(await id(), 'S01.4');
    await press('Backspace');
    assert.equal(await id(), 'S01.1');
    assert.equal(await caption(), byCue['S01.1'].captions.at(-1));
    await press('Space');
    assert.equal(await id(), 'S01.4');
    await press('Space');
    await press('ArrowRight');
    assert.equal(await id(), 'S02.0');
    await press('ArrowLeft');
    assert.equal(await id(), 'S01.4');
    assert.equal(await caption(), byCue['S01.4'].captions[1]);

    await go(slides[0].steps.at(-1).id);
    await advance();
    assert.equal(await id(), 'S02.0');
    await press('Backspace');
    assert.equal(await id(), slides[0].steps.at(-1).id);
    assert.equal(await caption(), slides[0].steps.at(-1).captions.at(-1));
    await page.evaluate(() => { location.hash = '#S16/2'; });
    await page.waitForFunction(() => CoursePlayer.getState().cueId === 'S16.2');
    await advance();
    await page.waitForTimeout(1450);
    assert.equal(await count('[data-kv-action="stored"]'), 6);
    assert.equal(await count('[data-kv-action="write"]'), 2);
    await shot('S16-write');
    await advance();
    assert.equal(await id(), 'S16.3');
    assert.equal(await count('[data-kv-read]'), 8);

    await press('h');
    assert.equal((await state()).mode, 'instructor');
    assert.equal(await visible('#notes'), true);
    assert.equal(await page.locator('#notes-text').textContent(), byCue['S16.3'].narration);
    assert.equal(await page.locator('#notes-cue').textContent(), slideById.S16.steps.at(-2).narration);
    assert.equal(await count('#step-rail button'), slideById.S16.steps.length);
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
    assert.equal(await caption(), byCue['S16.5'].captions.at(-1));
    await press('v');
    assert.equal((await state()).mode, 'instructor');
    assert.equal(await id(), 'S16.5');
    await page.locator('#step-rail [data-step="2"]').click();
    assert.equal(await id(), 'S16.2');
    await press('g');
    assert.equal(await count('#outline-grid [data-page]'), slides.length);
    await page.locator('#outline-grid [data-page]').filter({hasText: 'S20'}).click();
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
    await advance();
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
    await advance();
    await advance();
    await page.waitForTimeout(2250);
    assert.equal(await liveCache(), 6);
    await shot('S29-reply');
    await advance();
    await page.waitForTimeout(800);
    assert.equal(await liveCache(), 0);
    await shot('S29-release');

    await go('S38.3');
    await press('r');
    assert.equal(await moving(), true);
    await press('p');
    assert.equal((await state()).paused, true);
    assert.equal(await moving(), false);
    await press('p');
    await page.waitForTimeout(1300);
    assert.equal(await moving(), false);
    await advance();
    assert.equal(await id(), 'S38.4');
    await press('Backspace');
    assert.equal(await id(), 'S38.3');
    assert.equal(await moving(), false);
    await shot('S38-warmup');
    for (const cue of ['S32.2', 'S34.3', 'S35.4', 'S35.6', 'S36.2', 'S39.2', 'S39.5', 'S40.4']) {
      await go(cue);
      await shot(cue.replace('.', '-'));
    }

    await go('S01.0', '?record=1&autoplay=1');
    const waitForCaption = (cueId, captionIndex) => page.waitForFunction(
      ([cueId, captionIndex]) => {
        const state = CoursePlayer.getState();
        return state.cueId === cueId && state.captionIndex === captionIndex;
      }, [cueId, captionIndex], {timeout: 20_000});
    assert.equal((await state()).mode, 'recording');
    assert.equal(await visible('#notes'), false);
    await rememberDiagram();
    await waitForCaption('S01.0', 1);
    assert.equal(await caption(), byCue['S01.0'].captions[1]);
    assert.equal(await sameDiagram(), true);
    await press('p');
    const clockTime = () => page.locator('#stage').evaluate(async el => {
      const [clock] = el.getAnimations();
      await clock.ready;
      return clock.currentTime;
    });
    const time = await clockTime();
    await page.waitForTimeout(400);
    assert.equal(await clockTime(), time);
    assert.equal(await caption(), byCue['S01.0'].captions[1]);
    await press('h');
    assert.equal((await state()).mode, 'instructor');
    assert.equal(await page.locator('#notes-text').textContent(), byCue['S01.0'].narration);
    await press('p');
    await waitForCaption('S01.0', 2);
    assert.equal(await sameDiagram(), true);
    await waitForCaption('S01.1', 0);
    assert.equal(await sameDiagram(), false);
    assert.equal(await caption(), byCue['S01.1'].captions[0]);
    assert.equal(await page.locator('#notes-text').textContent(), byCue['S01.1'].narration);
    await rememberDiagram();
    const runningMotion = () => page.locator('#diagram').evaluate(el =>
      el.getAnimations({subtree: true}).some(animation => animation.playState === 'running'));
    assert.equal(await runningMotion(), true);
    await press('p');
    assert.equal(await runningMotion(), false);
    await press('p');
    await waitForCaption('S01.1', 1);
    assert.equal(await sameDiagram(), true);
    assert.equal(await caption(), byCue['S01.1'].captions[1]);
    assert.equal(await runningMotion(), false);
    await press('r');
    assert.equal((await state()).captionIndex, 0);
    assert.equal(await sameDiagram(), false);

    await go(order.at(-1).id, '?autoplay=1');
    await advance();
    assert.equal(await caption(), order.at(-1).captions.at(-1));
    assert.equal(await page.locator('#step').isDisabled(), true);
    assert.equal(await page.locator('#stage').evaluate(el => el.getAnimations().length), 0);
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({
      scenes: slides.length, cues: order.length, checked, captionChecks,
      maxCaptionWidth: Math.round(maxCaptionWidth * 10) / 10, directLinks: order.length, output,
    }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
