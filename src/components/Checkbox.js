import { Div, Input, Label, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Checkbox(...args) {
  const { props } = splitPropsChildren(args);
  const { label, description, className, style, inputProps, ...rest } = props;
  const control = Label(
    { className: 'g-ui-checkbox-control' },
    Input({ type: 'checkbox', className: cx('g-ui-checkbox-input', inputProps?.className), ...rest }),
    label ? Span({ className: 'g-ui-checkbox-label' }, label) : null
  );

  return Div(
    { className: cx('g-ui-checkbox', className) },
    control,
    description ? Span({ className: 'g-ui-checkbox-description' }, description) : null
  );
}
