import { Button } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function ActionIcon(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', variant: 'filled' });
  const { size, variant, color, className, ...rest } = props;
  return Button(
    {
      ...rest,
      type: 'button',
      className: cx(
        'g-ui-action-icon',
        classVar('g-ui-action-icon-size-', size, 'md'),
        classVar('g-ui-action-icon-color-', color, 'primary'),
        classVar('g-ui-action-icon-', variant, 'filled'),
        className
      ),
    },
    children
  );
}
