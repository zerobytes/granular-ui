import { Div, list, when, after } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { Button } from './Button.js';

export function Card(...args) {
  const { props, children } = splitPropsChildren(args, { padding: 'md', radius: 'md', shadow: 'none', border: 'default' });
  const { title, content, actions, border,  padding, radius, shadow, className, style, ...rest } = props;

  return Div(
    when(title, () => Div({ className: 'g-ui-card-title' }, title)),
    when(content, () => Div({ className: 'g-ui-card-content' }, content)),
    when(actions, () => Div(
      { className: 'g-ui-card-actions' },
      list(actions, (action) => Button(
        {
          className: 'g-ui-card-action',
          onClick: (e) => action.onClick.get()?.(e),
          leftSection: action.leftSection,
          rightSection: action.rightSection,
          size: after(action.size).compute(s => s || 'sm'),
          variant: after(action.variant).compute(v => v || 'outline'),
          ...(action.props.get() || {}),
        },
        action.label
      ))
    )),
    {
      className: cx(
        'g-ui-card',
        classVar('g-ui-card-border-', border, 'md'),
        classVar('g-ui-card-padding-', padding, 'md'),
        classVar('g-ui-card-radius-', radius, 'md'),
        classVar('g-ui-card-shadow-', shadow, 'md'),
        className
      ),
      ...rest,
    },
    children
  );
}
