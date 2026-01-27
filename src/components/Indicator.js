import { Div, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Indicator(...args) {
  const { props, children } = splitPropsChildren(args, { show: true, position: 'top-right', color: 'danger', size: 'md' });
  const { show, position, color, size, className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-indicator',
        classVar('g-ui-indicator-position-', position, 'top-right'),
        classVar('g-ui-indicator-color-', color, 'danger'),
        classVar('g-ui-indicator-size-', size, 'md'),
        className
      ),
    },
    children,
    when(show, () => Div({ className: 'g-ui-indicator-badge' }))
  );
}
