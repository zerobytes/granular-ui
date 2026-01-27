import { Div, Input, Label, Span, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Radio(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, description, size, className, inputProps, ...rest } = props;
  const control = Label(
    { className: 'g-ui-radio-control' },
    Input({
      type: 'radio',
      className: cx('g-ui-radio-input', classVar('g-ui-radio-size-', size, 'md'), inputProps?.className),
      ...rest,
    }),
    when(label, () => Span({ className: 'g-ui-radio-label' }, label))
  );

  return Div(
    { className: cx('g-ui-radio', classVar('g-ui-radio-size-', size, 'md'), className) },
    control,
    when(description, () => Span({ className: 'g-ui-radio-description' }, description))
  );
}
