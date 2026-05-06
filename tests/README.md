# granular-ui test harness

A minimal jsdom-backed test harness for `@granularjs/ui` components.

## Run

```bash
npm install                   # installs jsdom + c8 + @granularjs/core (file:..)
npm test                      # run all *.test.mjs in tests/
npm run test:coverage         # produce coverage report (text + html)
```

## Authoring a test

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { signal } from '@granularjs/core';
import { Button } from '../../src/components/Button.js';

test('Button onClick fires', () => {
  let n = 0;
  const h = mount(Button({ onClick: () => n++ }, 'Hit'));
  h.click(h.el);
  assert.equal(n, 1);
  h.cleanup();
});

test('Button reactive loading swaps content', async () => {
  const loading = signal(false);
  const h = mount(Button({ loading }, 'Submit'));
  loading.set(true);
  await flush();
  assert.match(h.el.textContent, /Loading/);
  h.cleanup();
});
```

## Harness API

| API | Purpose |
| --- | --- |
| `mount(node)` | mount a Granular node into a fresh `<div>` and return helpers |
| `mount().el` | first element of the rendered output |
| `mount().query(sel)` / `queryAll(sel)` | DOM querying scoped to the root |
| `mount().click(sel)` | dispatch a real click |
| `mount().input(sel, v)` / `change(sel, v)` | dispatch input/change events |
| `mount().fire(sel, type, init)` | dispatch arbitrary events |
| `mount().cleanup()` | remove the mount root |
| `flush()` | await reactive scheduler microtasks + a tick |

## Roadmap

- Add per-component tests until coverage of `src/components/**` reaches 80%+.
- Add interaction tests for Tabs, Accordion, Menu, Tooltip, Popover.
- Wire `npm run test:coverage` into CI alongside the existing core test suite.
