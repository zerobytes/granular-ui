import test from 'node:test';
import assert from 'node:assert/strict';
import { mount, flush } from '../harness.mjs';
import { signal } from '@granularjs/core';
import { Modal } from '../../src/components/Modal.js';

test('Modal renders nothing when opened is false', () => {
  const opened = signal(false);
  mount(Modal({ opened }, 'Body'));
  assert.equal(document.querySelector('.g-ui-modal'), null);
});

test('Modal mounts overlay+content via portal when opened', async () => {
  const opened = signal(false);
  mount(Modal({ opened, title: 'Hello' }, 'Body'));
  opened.set(true);
  await flush();
  assert.ok(document.querySelector('.g-ui-modal'));
  assert.match(document.body.textContent, /Hello/);
  assert.match(document.body.textContent, /Body/);
  opened.set(false);
  await flush();
  assert.equal(document.querySelector('.g-ui-modal'), null);
});

test('Modal onClose fires when overlay clicked', async () => {
  const opened = signal(true);
  let closed = 0;
  mount(Modal({ opened, onClose: () => closed++ }, 'X'));
  await flush();
  const overlay = document.querySelector('.g-ui-modal-overlay');
  assert.ok(overlay);
  overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  assert.equal(closed, 1);
});
