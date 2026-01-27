import { Button as HtmlButton, Span, when } from 'granular';
import { cx, splitPropsChildren, resolveBool, classVar, classFlag } from '../utils.js';

export function Button(...args) {
  const { props, children } = splitPropsChildren(args, { variant: 'filled', size: 'md' });
  const {
    variant,
    size,
    fullWidth,
    loading,
    leftSection,
    rightSection,
    className,
    disabled,
    ...rest
  } = props;
  const loadingValue = resolveBool(loading);
  const disabledValue = resolveBool(disabled);
  return HtmlButton(
    {
      ...rest,
      disabled: disabledValue || loadingValue,
      className: cx(
        'g-ui-button',
        classVar('g-ui-button-variant-', variant, 'filled'),
        classVar('g-ui-button-size-', size, 'md'),
        classFlag('g-ui-button-full', fullWidth),
        classFlag('g-ui-button-loading', loading),
        className
      ),
    },
    when(leftSection, () => Span({ className: 'g-ui-button-section-left' }, leftSection)),
    when(loadingValue, () => Span('Loading...'), () => children),
    when(rightSection, () => Span({ className: 'g-ui-button-section-right' }, rightSection))
  );
}
