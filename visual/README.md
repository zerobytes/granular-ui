# Visual Regression — Playwright

Pixel-diff screenshots for canonical component stories using Playwright's
`toHaveScreenshot()` snapshotter.

## Run

```bash
# requires playwright browsers (one-time):
npx -y playwright install chromium

npm run test:visual          # run + diff against committed snapshots
npm run test:visual:update   # update baseline screenshots
```

The dev server (`visual/server.mjs`) is started automatically by Playwright
(see `visual/playwright.config.mjs`) and serves component stories at
`http://localhost:5183/story/<name>`.

## Adding a story

1. Edit `visual/server.mjs` and add a new entry under `stories`.
2. Add a `test('visual: <name>', ...)` block to `visual/tests/components.spec.mjs`.
3. Run `npm run test:visual:update` to capture the baseline.
4. Commit the generated `*.png` files under `visual/tests/components.spec.mjs-snapshots/`.

## CI

Add this snippet to `.github/workflows/visual.yml`:

```yaml
name: Visual
on: [pull_request]
jobs:
  visual:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm run test:visual
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: granular-ui/playwright-report
```

## Notes

- Visual tests are skipped from `npm test` (which only runs jsdom unit tests).
- Diff threshold is `maxDiffPixelRatio: 0.01` (1% of pixels). Tune in `playwright.config.mjs`.
- Skip on developer machines with `--shard=1/1` if your local fonts differ; rely on CI snapshots.
