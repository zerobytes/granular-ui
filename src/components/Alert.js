import { Button, Div, Span } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';

export function Alert(...args) {
  const { props, children } = splitPropsChildren(args, { color: 'blue' });
  const {
    title,
    color = 'blue',
    icon,
    withCloseButton,
    onClose,
    className,
    ...rest
  } = props;
  const showClose = resolveBool(withCloseButton);
  return Div(
    { ...rest, className: cx('g-ui-alert', [color, (value) => `g-ui-alert-${value}`], className) },
    title || icon || showClose
      ? Div(
        { className: 'g-ui-alert-header' },
        icon ? Span({ className: 'g-ui-alert-icon' }, icon) : null,
        title ? Div({ className: 'g-ui-alert-title' }, title) : null,
        showClose
          ? Button({ type: 'button', className: 'g-ui-alert-close', onClick: () => onClose?.() }, '×')
          : null
      )
      : null,
    children
  );
}
