import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  pretendToBeVisual: true,
  url: 'http://localhost/',
});

globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.Element = dom.window.Element;
globalThis.Node = dom.window.Node;
globalThis.Text = dom.window.Text;
globalThis.Event = dom.window.Event;
globalThis.MouseEvent = dom.window.MouseEvent;
globalThis.KeyboardEvent = dom.window.KeyboardEvent;
globalThis.InputEvent = dom.window.InputEvent;
globalThis.CustomEvent = dom.window.CustomEvent;
globalThis.requestAnimationFrame = (fn) => setTimeout(fn, 16);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.getComputedStyle = dom.window.getComputedStyle;
globalThis.localStorage = dom.window.localStorage;
globalThis.sessionStorage = dom.window.sessionStorage;
try { globalThis.history = dom.window.history; } catch {}
try { globalThis.location = dom.window.location; } catch {}
try {
  Object.defineProperty(globalThis, 'navigator', {
    value: dom.window.navigator,
    configurable: true,
    writable: true,
  });
} catch {}

const { Renderer } = await import('@granularjs/core');

export function mount(node) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  const items = Renderer.normalize(node);
  for (const item of items) item.mountInto(root, null);
  return {
    root,
    el: root.firstElementChild,
    text: () => root.textContent,
    html: () => root.innerHTML,
    query: (sel) => root.querySelector(sel),
    queryAll: (sel) => Array.from(root.querySelectorAll(sel)),
    fire: (sel, event, init) => {
      const target = typeof sel === 'string' ? root.querySelector(sel) : sel;
      if (!target) throw new Error(`No element matched "${sel}"`);
      const ev = init ? new CustomEvent(event, { bubbles: true, ...init }) : new Event(event, { bubbles: true });
      Object.assign(ev, init || {});
      target.dispatchEvent(ev);
      return target;
    },
    click: (sel) => {
      const t = typeof sel === 'string' ? root.querySelector(sel) : sel;
      if (!t) throw new Error(`No element matched "${sel}"`);
      t.click();
      return t;
    },
    input: (sel, value) => {
      const t = typeof sel === 'string' ? root.querySelector(sel) : sel;
      if (!t) throw new Error(`No element matched "${sel}"`);
      t.value = value;
      const ev = new Event('input', { bubbles: true });
      t.dispatchEvent(ev);
      return t;
    },
    change: (sel, value) => {
      const t = typeof sel === 'string' ? root.querySelector(sel) : sel;
      if (!t) throw new Error(`No element matched "${sel}"`);
      if (t.type === 'checkbox' || t.type === 'radio') t.checked = value;
      else t.value = value;
      const ev = new Event('change', { bubbles: true });
      t.dispatchEvent(ev);
      return t;
    },
    cleanup: () => root.remove(),
  };
}

export async function flush() {
  await Promise.resolve();
  await Promise.resolve();
  await new Promise((r) => setTimeout(r, 0));
}
