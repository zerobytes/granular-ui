import { Button } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function ActionIcon(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', variant: 'subtle' });
  const { size = 'md', variant = 'subtle', className, ...rest } = props;
  return Button(
    {
      ...rest,
      type: 'button',
      className: cx('g-ui-action-icon', `g-ui-action-icon-size-${size}`, `g-ui-action-icon-${variant}`, className),
    },
    children
  );
}
