import { Div, Input, Label, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Radio(...args) {
  const { props } = splitPropsChildren(args);
  const { label, description, className, inputProps, ...rest } = props;
  const control = Label(
    { className: 'g-ui-radio-control' },
    Input({ type: 'radio', className: cx('g-ui-radio-input', inputProps?.className), ...rest }),
    label ? Span({ className: 'g-ui-radio-label' }, label) : null
  );

  return Div(
    { className: cx('g-ui-radio', className) },
    control,
    description ? Span({ className: 'g-ui-radio-description' }, description) : null
  );
}
