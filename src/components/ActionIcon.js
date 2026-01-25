import { Button } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function ActionIcon(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', variant: 'filled' });
  const { size = 'md', variant = 'filled', className, ...rest } = props;
  return Button(
    {
      ...rest,
      type: 'button',
      className: cx(
        'g-ui-action-icon',
        classVar('g-ui-action-icon-size-', size, 'md'),
        classVar('g-ui-action-icon-', variant, 'filled'),
        className
      ),
    },
    children
  );
}
