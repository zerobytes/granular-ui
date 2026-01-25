import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Alert(...args) {
  const { props, children } = splitPropsChildren(args, { color: 'primary' });
  const { title, color = 'primary', className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-alert', `g-ui-alert-${color}`, className) },
    title ? Div({ className: 'g-ui-alert-title' }, title) : null,
    children
  );
}
