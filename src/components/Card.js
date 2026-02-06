import { Div, list, when, after } from 'granular';
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
          onClick: action.onClick,
          leftSection: action.leftSection,
          rightSection: action.rightSection,
          size: action.size || 'sm',
          variant: action.variant || 'outline',
          ...action.props
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
