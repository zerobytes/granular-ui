import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { signal } from '@granularjs/core';
import { Checkbox } from '../../src/components/Checkbox.js';

test('Checkbox renders with label', () => {
  const h = mount(Checkbox({ label: 'Accept' }));
  assert.match(h.html(), /Accept/);
  assert.ok(h.query('input[type="checkbox"]'));
  h.cleanup();
});

test('Checkbox reflects controlled checked signal', async () => {
  const checked = signal(false);
  const h = mount(Checkbox({ checked, label: 'On' }));
  const input = h.query('input');
  assert.equal(input.checked, false);
  checked.set(true);
  await flush();
  assert.equal(input.checked, true);
  h.cleanup();
});

test('Checkbox onChange is invoked when source updates', async () => {
  const checked = signal(false);
  let received = null;
  mount(Checkbox({ checked, onChange: (v) => { received = v; } }));
  checked.set(true);
  await flush();
  assert.equal(received, true);
});
