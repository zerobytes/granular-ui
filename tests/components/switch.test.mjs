import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { signal } from '@granularjs/core';
import { Switch } from '../../src/components/Switch.js';

test('Switch renders with label and underlying input', () => {
  const h = mount(Switch({ label: 'Enable', checked: signal(false) }));
  assert.match(h.html(), /Enable/);
  assert.ok(h.query('input'));
  h.cleanup();
});

test('Switch updates input checked when source changes', async () => {
  const checked = signal(false);
  const h = mount(Switch({ checked }));
  const input = h.query('input');
  assert.equal(input.checked, false);
  checked.set(true);
  await flush();
  assert.equal(input.checked, true);
  h.cleanup();
});
