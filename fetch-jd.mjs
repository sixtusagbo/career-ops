#!/usr/bin/env node
// Fetch rendered JDs via Playwright and print plain text to stdout.
// Usage: node fetch-jd.mjs <url1> [url2] ...
import { chromium } from 'playwright';

const urls = process.argv.slice(2);
if (urls.length === 0) {
  console.error('Usage: node fetch-jd.mjs <url> [<url>...]');
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
});

for (const url of urls) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(3500);
    const title = await page.title();
    const text = await page.evaluate(() => {
      // Try to find the largest text block on the page
      const candidates = [
        document.querySelector('[class*="_descriptionText"]'),
        document.querySelector('[class*="description"]'),
        document.querySelector('[class*="content"]'),
        document.querySelector('article'),
        document.querySelector('main'),
        document.body,
      ].filter(Boolean);
      let best = '';
      for (const el of candidates) {
        const t = el.innerText || '';
        if (t.length > best.length) best = t;
      }
      return best;
    });
    const hasApply = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, a'));
      return btns.some((b) => /apply/i.test(b.textContent || ''));
    });
    console.log('===URL===');
    console.log(url);
    console.log('===TITLE===');
    console.log(title);
    console.log('===APPLY_BUTTON===');
    console.log(hasApply ? 'PRESENT' : 'MISSING');
    console.log('===BODY===');
    console.log(text.slice(0, 12000));
    console.log('===END===\n');
  } catch (e) {
    console.log('===URL===');
    console.log(url);
    console.log('===ERROR===');
    console.log(e.message);
    console.log('===END===\n');
  } finally {
    await page.close();
  }
}

await browser.close();
