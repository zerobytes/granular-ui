import { Input, Label, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Switch(...args) {
  const { props } = splitPropsChildren(args);
  const { label, className, style, inputProps, ...rest } = props;
  return Label(
    { className: cx('g-ui-switch', className) },
    Input({ type: 'checkbox', className: cx('g-ui-switch-input', inputProps?.className), ...rest }),
    label ? Span({ className: 'g-ui-switch-label' }, label) : null
  );
}
