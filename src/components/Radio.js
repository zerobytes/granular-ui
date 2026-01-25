import { Div, Input, Label, Span } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Radio(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, description, size = 'md', className, inputProps, ...rest } = props;
  const control = Label(
    { className: 'g-ui-radio-control' },
    Input({
      type: 'radio',
      className: cx('g-ui-radio-input', classVar('g-ui-radio-size-', size, 'md'), inputProps?.className),
      ...rest,
    }),
    label ? Span({ className: 'g-ui-radio-label' }, label) : null
  );

  return Div(
    { className: cx('g-ui-radio', classVar('g-ui-radio-size-', size, 'md'), className) },
    control,
    description ? Span({ className: 'g-ui-radio-description' }, description) : null
  );
}
