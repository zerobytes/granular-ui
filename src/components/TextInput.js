import { Div, Input, Textarea as HtmlTextarea, Label, Span, when, state, after, isState } from '@granularjs/core';
import { cx, splitPropsChildren, classFlag, classVar, resolveValue, resolveBool } from '../utils.js';

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
    inputClassName,
    multiline,
    disabled,
    readOnly,
    style,
    labelStyle,
    descriptionStyle,
    errorStyle,
    inputWrapperStyle,
    inputStyle,
    leftSectionStyle,
    rightSectionStyle,
    value: computed_value,
    ...rest
  } = props;
  const { value: raw_value, node, onChange, onInput, onFocus, onBlur, onKeyDown, onKeyUp, onClick } = rawProps;

  const isValueTwoWay = isState(raw_value) && !onChange && !onInput
  const currentState = isValueTwoWay ? raw_value : state(resolveValue(computed_value) ?? '');

  after(computed_value).change((next) => {
    if (isValueTwoWay) return;
    currentState.set(resolveValue(next) ?? '');
  });

  const handleInput = (ev) => {
    const next = ev?.target?.value ?? '';
    if (next === computed_value.get()) return;
    currentState.set(next);
    onChange?.(ev);
    onInput?.(ev);
  };

  const isMultiline = resolveBool(multiline);
  const Control = isMultiline ? HtmlTextarea : Input;
  const finalInputClassName = cx(inputClassName, isMultiline && 'g-ui-textarea');

  const input = Control({
    ...rest,
    style: inputStyle,
    node,
    value: currentState,
    onInput: handleInput,
    onChange: handleInput,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onClick,
    disabled,
    readOnly,
    className: cx('g-ui-input', finalInputClassName),
  });


  return Div(
    {
      className: cx('g-ui-text-input',
        className,
        classFlag('g-ui-input-disabled', disabled),
        classFlag('g-ui-input-read-only', readOnly)
      ),
      style
    },
    when(label, () => Label({ className: 'g-ui-text-input-label', style: labelStyle }, label)),
    when(description, () => Span({ className: 'g-ui-text-input-description', style: descriptionStyle }, description)),
    Div(
      {
        className: cx(
          'g-ui-input-wrapper',
          classFlag('g-ui-input-multiline', multiline),
          classVar('g-ui-input-size-', size, 'md'),
          classFlag('g-ui-input-error', error)
        ),
        style: inputWrapperStyle
      },
      when(leftSection, () => Div({ className: 'g-ui-input-section', style: leftSectionStyle }, leftSection)),
      input,
      when(rightSection, () => Div({ className: 'g-ui-input-section', style: rightSectionStyle }, rightSection))
    ),
    when(error, () => Div({ className: 'g-ui-text-input-error-text', style: errorStyle }, error))
  );
}
