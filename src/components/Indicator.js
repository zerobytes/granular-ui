import { Div, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Indicator(...args) {
  const { props, children } = splitPropsChildren(args, { show: true });
  const { show, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-indicator', className) },
    children,
    when(show, () => Div({ className: 'g-ui-indicator-badge' }))
  );
}
