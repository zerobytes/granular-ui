import { Div, Input, Label, Span, when } from 'granular';
import { cx, splitPropsChildren, classFlag, classVar } from '../utils.js';

export function TextInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const {
    label,
    description,
    error,
    size,
    leftSection,
    rightSection,
    className,
    style,
    inputProps,
    ...rest
  } = props;
  const { onChange } = rawProps;
  const input = Input({
    ...rest,
    className: cx('g-ui-input', inputProps?.className),
  });

  return Div(
    { className: cx('g-ui-text-input', className) },
    when(label, () => Label({ className: 'g-ui-text-input-label' }, label)),
    when(description, () => Span({ className: 'g-ui-text-input-description' }, description)),
    Div(
      {
        className: cx(
          'g-ui-input-wrapper',
          classVar('g-ui-input-size-', size, 'md'),
          classFlag('g-ui-input-error', error)
        ),
      },
      when(leftSection, () => Span({ className: 'g-ui-input-section' }, leftSection)),
      input,
      when(rightSection, () => Span({ className: 'g-ui-input-section' }, rightSection))
    ),
    when(error, () => Span({ className: 'g-ui-text-input-error-text' }, error))
  );
}
