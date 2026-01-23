import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Notification(...args) {
  const { props, children } = splitPropsChildren(args);
  const { title, color = 'primary', className, style } = props;
  return Div(
    { className: cx('g-ui-notification', `g-ui-notification-${color}`, className) },
    title ? Div({ className: 'g-ui-notification-title' }, title) : null,
    children
  );
}
