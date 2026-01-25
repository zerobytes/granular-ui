import { Button, Div, Span } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';
import { Loading } from './Loading.js';

export function Notification(...args) {
  const { props, children } = splitPropsChildren(args, { color: 'blue', withCloseButton: true });
  const {
    title,
    color = 'blue',
    icon,
    loading,
    withCloseButton,
    onClose,
    className,
    style,
  } = props;
  const showClose = resolveBool(withCloseButton);
  const isLoading = resolveBool(loading);
  const withIcon = !!icon || isLoading;
  return Div(
    {
      className: cx(
        'g-ui-notification',
        [color, (value) => `g-ui-notification-${value}`],
        withIcon && 'g-ui-notification-with-icon',
        className
      ),
    },
    icon
      ? Span({ className: 'g-ui-notification-icon' }, icon)
      : isLoading
        ? Loading({ size: 'sm', className: 'g-ui-notification-loader' })
        : null,
    Div(
      { className: 'g-ui-notification-body' },
      title ? Div({ className: 'g-ui-notification-title' }, title) : null,
      children
    ),
    showClose
      ? Button({ type: 'button', className: 'g-ui-notification-close', onClick: () => onClose?.() }, '×')
      : null
  );
}
