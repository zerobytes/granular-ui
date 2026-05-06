import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { state } from '@granularjs/core';
import { TextInput } from '../../src/components/TextInput.js';

test('TextInput renders label and input', () => {
  const h = mount(TextInput({ label: 'Name', placeholder: 'Type...' }));
  assert.match(h.html(), /Name/);
  const input = h.query('input');
  assert.ok(input);
  assert.equal(input.placeholder, 'Type...');
  h.cleanup();
});

test('TextInput two-way binding via state', async () => {
  const value = state('hello');
  const h = mount(TextInput({ value }));
  const input = h.query('input');
  assert.equal(input.value, 'hello');
  h.input(input, 'world');
  await flush();
  assert.equal(value.get(), 'world');
  h.cleanup();
});

test('TextInput updates input when source signal changes', async () => {
  const value = state('a');
  const h = mount(TextInput({ value }));
  const input = h.query('input');
  value.set('b');
  await flush();
  assert.equal(input.value, 'b');
  h.cleanup();
});
