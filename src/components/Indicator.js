import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Indicator(...args) {
  const { props, children } = splitPropsChildren(args);
  const { show = true, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-indicator', className) },
    children,
    show ? Div({ className: 'g-ui-indicator-badge' }) : null
  );
}
