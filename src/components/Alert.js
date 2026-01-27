import { Button, Div, Span, after, when } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';

export function Alert(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { color: 'blue' });
  const {
    title,
    color,
    icon,
    withCloseButton,
    className,
    ...rest
  } = props;
  const { onClose } = rawProps;

  const hasContent = after(title, withCloseButton).compute(([title, showClose]) => {
    return title || showClose
  });
  const hasIcon = after(icon).compute((icon) => {
    return icon !== undefined
  });

  return Div(
    { ...rest, className: cx('g-ui-alert', [color, (value) => `g-ui-alert-${value}`], className) },
    Div(
      { className: 'g-ui-alert-header' },
      when(icon, () => Span({ className: 'g-ui-alert-icon' }, icon)),
      when(title, () => Div({ className: 'g-ui-alert-title' }, title)),
      when(withCloseButton, () => Button({ type: 'button', className: 'g-ui-alert-close', onClick: () => onClose?.() }, '×'))
    ),
    children
  );
}
