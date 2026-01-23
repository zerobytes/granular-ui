import { Div, Input, Label, Span, when } from 'granular';
import { cx, splitPropsChildren, classFlag } from '../utils.js';

export function TextInput(...args) {
  const { props } = splitPropsChildren(args);
  const { label, description, error, className, style, inputProps, onChange, ...rest } = props;
  const input = Input({
    ...rest,
    className: cx('g-ui-input', classFlag('g-ui-input-error', error), inputProps?.className),
    onInput: (ev) => {
      onChange?.(ev?.target?.value, ev);
      inputProps?.onInput?.(ev);
    },
  });

  return Div(
    { className: cx('g-ui-text-input', className) },
    label ? Label({ className: 'g-ui-text-input-label' }, label) : null,
    description ? Span({ className: 'g-ui-text-input-description' }, description) : null,
    input,
    when(error, () => Span({ className: 'g-ui-text-input-error-text' }, error))
  );
}
