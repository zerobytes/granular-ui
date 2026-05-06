import { Div, Input, Textarea as HtmlTextarea, Label, Span, when, state, after, isState } from '@granularjs/core';
import { cx, splitPropsChildren, classFlag, classVar, resolveValue, resolveBool } from '../utils.js';

/**
 * @typedef {import('../types').InputProps<string> & {
 *   leftSection?: import('../types').Child,
 *   rightSection?: import('../types').Child,
 *   type?: 'text' | 'email' | 'url' | 'tel' | 'number' | 'search',
 *   autoFocus?: boolean,
 *   maxLength?: import('../types').Reactive<number>,
 * }} TextInputProps
 *
 * @param {TextInputProps | import('../types').Child} args
 */
let textInputIdCounter = 0;

export function TextInput(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: 'md' });
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
    id: explicitId,
    ...rest
  } = props;
  const inputId = explicitId ?? `g-ui-input-${++textInputIdCounter}`;
  const { value: raw_value, node, onChange, onInput, onFocus, onBlur, onKeyDown, onKeyUp, onClick } = rawProps;

  const hasCustomContent = children.length > 0;
  let inputContent;

  if (hasCustomContent) {
    inputContent = children;
  } else {
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

    inputContent = Control({
      ...rest,
      id: inputId,
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
  }

  const wrapperNode = state(null);
  const focusInput = () => {
    const el = wrapperNode.get();
    if (!el) return;
    const input = el.querySelector('input, textarea');
    if (input && document.activeElement !== input) input.focus();
  };

  return Div(
    {
      className: cx('g-ui-text-input',
        className,
        classFlag('g-ui-input-disabled', disabled),
        classFlag('g-ui-input-read-only', readOnly)
      ),
      style
    },
    when(label, () => Label({ className: 'g-ui-text-input-label', style: labelStyle, htmlFor: inputId }, label)),
    when(description, () => Span({ className: 'g-ui-text-input-description', style: descriptionStyle }, description)),
    Div(
      {
        node: wrapperNode,
        className: cx(
          'g-ui-input-wrapper',
          classFlag('g-ui-input-multiline', multiline),
          classVar('g-ui-input-size-', size, 'md'),
          classFlag('g-ui-input-error', error)
        ),
        style: inputWrapperStyle,
        onClick: focusInput,
      },
      when(leftSection, () => Div({ className: 'g-ui-input-section', style: leftSectionStyle }, leftSection)),
      inputContent,
      when(rightSection, () => Div({ className: 'g-ui-input-section', style: rightSectionStyle }, rightSection))
    ),
    when(error, () => Div({ className: 'g-ui-text-input-error-text', style: errorStyle }, error))
  );
}
