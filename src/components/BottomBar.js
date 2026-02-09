import { Button, Div, Span, when } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag } from '../utils.js';

export function BottomBar(...args) {
  const { props, children } = splitPropsChildren(args, { grow: true });
  const { grow, className, ...rest } = props;

  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-bottombar',
        classFlag('g-ui-bottombar-grow', grow),
        className
      ),
    },
    children
  );
}

BottomBar.Action = function BottomBarAction(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { variant: 'subtle' });
  const { icon, label, active, disabled, variant, className, ...rest } = props;
  const { onClick } = rawProps;

  return Button(
    {
      ...rest,
      className: cx(
        'g-ui-bottombar-action',
        classVar('g-ui-bottombar-action-variant-', variant, 'subtle'),
        classFlag('g-ui-bottombar-action-active', active),
        classFlag('g-ui-bottombar-action-disabled', disabled),
        className
      ),
      onClick,
      disabled,
    },
    when(icon, () => Span({ className: 'g-ui-bottombar-action-icon' }, icon)),
    when(label, () => Span({ className: 'g-ui-bottombar-action-label' }, label)),
    children
  );
};
