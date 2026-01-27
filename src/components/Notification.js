import { Button, Div, Span, when, after } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';
import { Loading } from './Loading.js';

export function Notification(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { color: 'blue', withCloseButton: true });
  const {
    title,
    color,
    icon,
    loading,
    withCloseButton,
    className,
    style,
  } = props;
  const { onClose } = rawProps;
  const showClose = resolveBool(withCloseButton);
  const isLoading = resolveBool(loading);
  const showLoader = after(icon, isLoading).compute(([nextIcon, nextLoading]) => !nextIcon && !!nextLoading);
  const withIcon = after(icon, isLoading).compute(([nextIcon, nextLoading]) => !!nextIcon || !!nextLoading);
  return Div(
    {
      className: cx(
        'g-ui-notification',
        [color, (value) => `g-ui-notification-${value}`],
        [withIcon, 'g-ui-notification-with-icon'],
        className
      ),
    },
    when(icon, () => Span({ className: 'g-ui-notification-icon' }, icon)),
    when(showLoader, () => Loading({ size: 'sm', className: 'g-ui-notification-loader' })),
    Div(
      { className: 'g-ui-notification-body' },
      when(title, () => Div({ className: 'g-ui-notification-title' }, title)),
      children
    ),
    when(showClose, () =>
      Button({ type: 'button', className: 'g-ui-notification-close', onClick: () => onClose?.() }, '×')
    )
  );
}
