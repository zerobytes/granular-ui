import { Button as HtmlButton, Span, when, after} from 'granular';
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

  const isDisabled = after(disabled, loading).compute(([disabled, loading]) => disabled || loading);

  return HtmlButton(
    {
      ...rest,
      disabled: isDisabled,
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
    when(loading, () => Span('Loading...'), () => children),
    when(rightSection, () => Span({ className: 'g-ui-button-section-right' }, rightSection))
  );
}
