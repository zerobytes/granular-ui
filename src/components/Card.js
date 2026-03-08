import { Div, list, when, after, Span } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, classFlag } from '../utils.js';
import { Button } from './Button.js';

export function Card(...args) {
  const { props, children } = splitPropsChildren(args, { padding: 'md', radius: 'md', shadow: 'none' });
  const { title, content, actions, border, padding, radius, shadow, className, style, ...rest } = props;
  const a = classFlag('g-ui-card-bordered', border)
  after(a).compute((v) => console.log(v))
  return Div(
    { style },
    when(title, () => Div({ className: 'g-ui-card-title' }, title)),
    when(content, () => Div({ className: 'g-ui-card-content' }, content)),
    {
      className: cx(
        'g-ui-card',
        classFlag('g-ui-card-bordered', border),
        classVar('g-ui-card-border-', border, 'none'),
        classVar('g-ui-card-padding-', padding, 'md'),
        classVar('g-ui-card-radius-', radius, 'md'),
        classVar('g-ui-card-shadow-', shadow, 'md'),
        className
      ),
      ...rest,
    },
    children,
    when(actions, () => Div(
      { className: 'g-ui-card-actions' },
      list(actions, (action) => Button(
        {
          className: 'g-ui-card-action',
          onClick: (e) => action.get().onClick?.(e),
          leftSection: action.leftSection,
          rightSection: action.rightSection,
          size: after(action.size).compute(s => s || 'sm'),
          variant: after(action.variant).compute(v => v || 'outline'),
          ...(action.get().props || {}),
        },
        action.label
      ))
    )),
  );
}
