import test from 'node:test';
import assert from 'node:assert/strict';
import { checkA11y, formatViolations } from '../a11y.mjs';

import { Button } from '../../src/components/Button.js';
import { TextInput } from '../../src/components/TextInput.js';
import { Checkbox } from '../../src/components/Checkbox.js';
import { Switch } from '../../src/components/Switch.js';
import { Alert } from '../../src/components/Alert.js';
import { Badge } from '../../src/components/Badge.js';
import { Card } from '../../src/components/Card.js';
import { Stack } from '../../src/components/Stack.js';
import { Title } from '../../src/components/Title.js';
import { Anchor } from '../../src/components/Anchor.js';
import { Avatar } from '../../src/components/Avatar.js';

const cases = [
  ['Button',    () => Button({ 'aria-label': 'Close' }, 'X')],
  ['TextInput', () => TextInput({ label: 'Email', id: 'email' })],
  ['Checkbox',  () => Checkbox({ label: 'I agree' })],
  ['Switch',    () => Switch({ label: 'Notifications' })],
  ['Alert',     () => Alert({ role: 'alert' }, 'Heads up')],
  ['Badge',     () => Badge('New')],
  ['Stack',     () => Stack(Title({ order: 2 }, 'Heading'), Card('content'))],
  ['Anchor',    () => Anchor({ href: '/x' }, 'Link')],
  ['Avatar',    () => Avatar({ alt: 'User avatar' })],
];

for (const [name, factory] of cases) {
  test(`a11y: ${name} has no critical/serious violations`, async () => {
    const results = await checkA11y(factory());
    const blockers = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
    assert.equal(
      blockers.length, 0,
      `${name}: ${blockers.length} blocking a11y violation(s)\n${formatViolations(blockers)}`
    );
  });
}
