import { Div, Input, Label, Span, when } from 'granular';
import { cx, splitPropsChildren, classFlag, classVar } from '../utils.js';

export function TextInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const {
    label,
    description,
    error,
    size = 'md',
    leftSection,
    rightSection,
    className,
    style,
    inputProps,
    onChange,
    ...rest
  } = props;
  const input = Input({
    ...rest,
    className: cx('g-ui-input', inputProps?.className),
    onInput: (ev) => {
      onChange?.(ev?.target?.value, ev);
      inputProps?.onInput?.(ev);
    },
  });

  return Div(
    { className: cx('g-ui-text-input', className) },
    label ? Label({ className: 'g-ui-text-input-label' }, label) : null,
    description ? Span({ className: 'g-ui-text-input-description' }, description) : null,
    Div(
      {
        className: cx(
          'g-ui-input-wrapper',
          classVar('g-ui-input-size-', size, 'md'),
          classFlag('g-ui-input-error', error)
        ),
      },
      leftSection ? Span({ className: 'g-ui-input-section' }, leftSection) : null,
      input,
      rightSection ? Span({ className: 'g-ui-input-section' }, rightSection) : null
    ),
    when(error, () => Span({ className: 'g-ui-text-input-error-text' }, error))
  );
}
