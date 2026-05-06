import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { signal } from '@granularjs/core';
import { Button } from '../../src/components/Button.js';

test('Button renders children and base class', () => {
  const h = mount(Button('Click me'));
  assert.equal(h.el.tagName, 'BUTTON');
  assert.match(h.el.className, /g-ui-button/);
  assert.match(h.el.textContent, /Click me/);
  h.cleanup();
});

test('Button reflects variant and color via class variants', () => {
  const h = mount(Button({ variant: 'outline', color: 'success' }, 'OK'));
  assert.match(h.el.className, /g-ui-button-variant-outline/);
  assert.match(h.el.className, /g-ui-button-color-success/);
  h.cleanup();
});

test('Button onClick fires on click', () => {
  let clicked = 0;
  const h = mount(Button({ onClick: () => clicked++ }, 'Hit'));
  h.click(h.el);
  h.click(h.el);
  assert.equal(clicked, 2);
  h.cleanup();
});

test('Button reactive loading swaps content', async () => {
  const loading = signal(false);
  const h = mount(Button({ loading }, 'Submit'));
  assert.match(h.el.textContent, /Submit/);
  loading.set(true);
  await flush();
  assert.match(h.el.textContent, /Loading/);
  loading.set(false);
  await flush();
  assert.match(h.el.textContent, /Submit/);
  h.cleanup();
});

test('Button disabled prop disables the underlying button', async () => {
  const disabled = signal(false);
  const h = mount(Button({ disabled }, 'Action'));
  assert.equal(h.el.disabled, false);
  disabled.set(true);
  await flush();
  assert.equal(h.el.disabled, true);
  h.cleanup();
});
