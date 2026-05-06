import test from 'node:test';
import assert from 'node:assert/strict';
import { mount } from '../harness.mjs';
import * as ui from '../../src/index.js';

const cases = [
  ['Card',          () => ui.Card('content')],
  ['Stack',         () => ui.Stack('a', 'b')],
  ['Group',         () => ui.Group('a', 'b')],
  ['Container',     () => ui.Container('inner')],
  ['Center',        () => ui.Center('content')],
  ['Space',         () => ui.Space()],
  ['Divider',       () => ui.Divider()],
  ['Paper',         () => ui.Paper('boxed')],
  ['Title',         () => ui.Title({ order: 2 }, 'My Title')],
  ['Text',          () => ui.Text('paragraph')],
  ['Code',          () => ui.Code('const x = 1')],
  ['Kbd',           () => ui.Kbd('Ctrl')],
  ['Blockquote',    () => ui.Blockquote('quoted')],
  ['Badge',         () => ui.Badge('New')],
  ['Chip',          () => ui.Chip('Tag')],
  ['Anchor',        () => ui.Anchor({ href: '/x' }, 'link')],
  ['Avatar',        () => ui.Avatar({ alt: 'John' })],
  ['Tag',           () => ui.Tag('label')],
  ['Skeleton',      () => ui.Skeleton({ height: 20 })],
  ['Loading',       () => ui.Loading()],
  ['Progress',      () => ui.Progress({ value: 50 })],
  ['Alert',         () => ui.Alert('important')],
  ['ActionIcon',    () => ui.ActionIcon('I')],
  ['Pagination',    () => ui.Pagination({ total: 10, page: 1 })],
  ['Breadcrumbs',   () => ui.Breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Docs' }])],
  ['SimpleGrid',    () => ui.SimpleGrid({ cols: 2 }, 'a', 'b')],
  ['Grid',          () => ui.Grid({ gutter: 8 }, ui.Col({ span: 6 }, 'L'), ui.Col({ span: 6 }, 'R'))],
  ['Flex',          () => ui.Flex({ gap: 8 }, 'a')],
  ['Image',         () => ui.Image({ src: '/x.png', alt: 'x' })],
  ['Icon',          () => ui.Icon({ name: 'check' })],
  ['Textarea',      () => ui.Textarea({ value: '' })],
  ['NumberInput',   () => ui.NumberInput({ value: 1 })],
  ['NumberField',   () => ui.NumberField({ value: 1 })],
  ['PasswordInput', () => ui.PasswordInput({ value: '' })],
  ['SearchInput',   () => ui.SearchInput({ value: '' })],
  ['Radio',         () => ui.Radio({ value: 'a', label: 'A' })],
  ['SegmentedControl', () => ui.SegmentedControl({ data: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }], value: 'a' })],
  ['Switch',        () => ui.Switch({ label: 'on' })],
  ['Burger',        () => ui.Burger()],
  ['CopyButton',    () => ui.CopyButton({ value: 'hi' })],
  ['Indicator',     () => ui.Indicator({}, 'X')],
  ['List',          () => ui.List(['a', 'b'])],
  ['NavLink',       () => ui.NavLink({ label: 'Home', href: '/' })],
  ['Sidebar',       () => ui.Sidebar('content')],
  ['Stepper',       () => ui.Stepper({ active: 0 }, [{ label: 'A' }, { label: 'B' }])],
  ['Timeline',      () => ui.Timeline({ active: 0 }, [{ title: 'A' }, { title: 'B' }])],
  ['Rating',        () => ui.Rating({ value: 3, count: 5 })],
  ['Fieldset',      () => ui.Fieldset({ legend: 'Group' }, 'inside')],
  ['Affix',         () => ui.Affix({}, 'pinned')],
  ['Toast',         () => ui.Toast({ title: 'Hello' })],
  ['LoadingOverlay',() => ui.LoadingOverlay({ visible: false })],
  ['ProgressRing',  () => ui.ProgressRing({ value: 60 })],
  ['ScrollArea',    () => ui.ScrollArea({}, 'long content')],
  ['Collapse',      () => ui.Collapse({ in: false }, 'hidden')],
  ['Tabs',          () => ui.Tabs({ value: 'a' }, [{ value: 'a', label: 'A', content: 'A!' }, { value: 'b', label: 'B', content: 'B!' }])],
  ['Accordion',     () => ui.Accordion([{ value: 'a', label: 'A', content: 'body' }])],
  ['AppBar',        () => ui.AppBar('top')],
  ['BottomBar',     () => ui.BottomBar('bottom')],
];

for (const [name, factory] of cases) {
  test(`smoke: ${name} mounts without throwing`, () => {
    let h;
    try { h = mount(factory()); }
    catch (err) { assert.fail(`mount failed for ${name}: ${err.message}`); }
    assert.ok(h.html().length >= 0);
    h.cleanup();
  });
}
