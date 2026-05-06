import { test, expect } from '@playwright/test';

const STORIES = ['button', 'inputs', 'cards'];

for (const name of STORIES) {
  test(`visual: ${name}`, async ({ page }) => {
    await page.goto(`/story/${name}`);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
