import { Div, Button, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Toast(...args) {
  const { props, children } = splitPropsChildren(args);
  const { title, onClose, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-toast', className) },
    Div(
      { className: 'g-ui-toast-row' },
      when(title, () => Div({ className: 'g-ui-toast-title' }, title)),
      when(onClose, () => Button({ className: 'g-ui-toast-close', onClick: onClose }, '×'))
    ),
    children
  );
}
