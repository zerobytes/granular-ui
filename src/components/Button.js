import { Button as HtmlButton, Span, when, after} from '@granularjs/core';
import { cx, splitPropsChildren, resolveBool, classVar, classFlag } from '../utils.js';

/**
 * @typedef {import('../types').BaseUIProps & {
 *   variant?: import('../types').Reactive<import('../types').Variant>,
 *   color?: import('../types').Reactive<import('../types').Color>,
 *   size?: import('../types').Reactive<import('../types').Size>,
 *   fullWidth?: import('../types').Reactive<boolean>,
 *   loading?: import('../types').Reactive<boolean>,
 *   disabled?: import('../types').Reactive<boolean>,
 *   leftSection?: import('../types').Child,
 *   rightSection?: import('../types').Child,
 *   justify?: import('../types').Reactive<'left'|'center'|'right'|'space-between'>,
 *   onClick?: (event: MouseEvent) => void,
 * }} ButtonProps
 *
 * @param {ButtonProps | import('../types').Child} args
 */
export function Button(...args) {
  const { props, children } = splitPropsChildren(args, { variant: 'filled', size: 'md', justify: 'center' });
  const {
    variant,
    color,
    size,
    fullWidth,
    loading,
    leftSection,
    rightSection,
    className,
    disabled,
    justify,
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
        classVar('g-ui-button-color-', color, 'primary'),
        classVar('g-ui-justify-', justify, 'center'),
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
