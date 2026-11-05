const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function capture() {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH });
  const url = pathToFileURL(path.join(__dirname, '../index.html')).href;
  const lines = JSON.parse(fs.readFileSync('lines.json'));
  const timeline = [];
  try {
    const page = await browser.newPage({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: process.argv[2] === '--4k' ? 2 : 1,
      offline: true,
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url + '#' + lines[0].cue.replace('.', '/'));
    await page.evaluate(() => document.fonts.ready);
    for (const [i, line] of lines.entries()) {
      const state = await page.evaluate(() => CoursePlayer.getState());
      assert.equal(state.cueId, line.cue);
      assert.equal(state.captionIndex, line.caption);
      assert.equal(await page.locator('#narration-caption').textContent(), line.text);
      const take = async (suffix, seconds) => {
        const file = `frame-${i}-${suffix}.png`;
        await page.screenshot({ path: file });
        timeline.push(`file '${file}'\noption framerate 1000\nduration ${seconds.toFixed(6)}\n`);
      };
      let motion = 0;
      if (line.caption === 0) {
        const duration = await page.evaluate(() => {
          CoursePlayer.render(true);
          window.exportEffects = document.getAnimations()
            .filter(a => a.playState === 'running')
            .map(a => {
              const start = a.currentTime || 0;
              a.pause();
              return { a, start };
            });
          const remaining = Math.max(0, ...exportEffects.map(({ a, start }) =>
            a.effect.getComputedTiming().endTime - start));
          const { slideId, position } = CoursePlayer.getState();
          const phase = COURSE.slides.find(s => s.id === slideId).steps[position].phase;
          return phase ? Math.min(remaining, phase[1] - phase[0]) : remaining;
        });
        // Leave the settled diagram visible after motion, even for a short line.
        motion = Math.min(duration / 1000, Math.max(0, line.seconds - 0.25));
        const count = Math.ceil(motion * 12);
        for (let j = 0; j < count; j++) {
          await page.evaluate(t => exportEffects.forEach(({ a, start }) => {
            a.currentTime = Math.min(start + t, a.effect.getComputedTiming().endTime);
          }), duration * j / count);
          await take(j, motion / count);
        }
        await page.evaluate(() => CoursePlayer.render(false));
      }
      await take('hold', line.seconds - motion);
      if (i < lines.length - 1) await page.evaluate(() => CoursePlayer.step(1));
    }
    assert.deepEqual(errors, []);
    fs.writeFileSync('timeline.txt', timeline.join('') +
      timeline.at(-1).split('duration')[0]);
  } finally {
    await browser.close();
  }
}

capture().catch(error => { console.error(error); process.exitCode = 1; });
