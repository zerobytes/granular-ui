import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'http://localhost:5183',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  },
  webServer: {
    command: 'node ./visual/server.mjs',
    cwd: '..',
    port: 5183,
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
