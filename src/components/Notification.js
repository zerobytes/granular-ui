import { Button, Div, Span, when, after } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';
import { Loading } from './Loading.js';
import { closeSvg } from '../theme/icons.js';

export function Notification(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { color: 'blue', withCloseButton: true });
  const {
    title,
    color,
    icon,
    loading,
    withCloseButton,
    withBorder,
    className,
    style,
  } = props;
  const { onClose } = rawProps;
  const showLoader = after(icon, loading).compute(([nextIcon, nextLoading]) => !nextIcon && !!nextLoading);
  const withIcon = after(icon, loading).compute(([nextIcon, nextLoading]) => !!nextIcon || !!nextLoading);
  return Div(
    {
      className: cx(
        'g-ui-notification',
        [withBorder, 'g-ui-notification-bordered'],
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
    when(withCloseButton, () =>
      Button({ type: 'button', className: 'g-ui-notification-close', onClick: () => onClose?.() }, Span({ innerHTML: closeSvg }))
    )
  );
}
