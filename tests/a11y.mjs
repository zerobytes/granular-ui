import { mount } from './harness.mjs';
import axeFactory from 'axe-core';

const axe = axeFactory.default ?? axeFactory;

const DEFAULT_CONFIG = {
  rules: {
    'color-contrast': { enabled: false },
    'region': { enabled: false },
  },
};

let configured = false;
function ensureConfigured() {
  if (configured) return;
  try { axe.configure(DEFAULT_CONFIG); } catch {}
  configured = true;
}

export async function checkA11y(node, options = {}) {
  ensureConfigured();
  const h = mount(node);
  try {
    const results = await axe.run(h.root, {
      runOnly: options.runOnly || { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
      ...options,
    });
    return results;
  } finally {
    h.cleanup();
  }
}

export function formatViolations(violations) {
  if (!violations.length) return 'no violations';
  return violations.map((v) =>
    `[${v.id}] ${v.help} (${v.impact})\n  -> ${v.helpUrl}\n  nodes: ${v.nodes.length}`
  ).join('\n');
}
