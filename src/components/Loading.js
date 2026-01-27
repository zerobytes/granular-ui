import { Div, Span } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Loading(...args) {
  const { props } = splitPropsChildren(args, { variant: 'spinner', size: 'md' });
  const { variant, size, className, style } = props;
  if (variant === 'dots') {
    return Div({ className: cx('g-ui-loading g-ui-dots', classVar('g-ui-loading-size-', size, 'md'), className) });
  }
  if (variant === 'bars') {
    return Div(
      { className: cx('g-ui-loading g-ui-bars', classVar('g-ui-loading-size-', size, 'md'), className) },
      Span(''),
      Span(''),
      Span('')
    );
  }
  return Div({
    className: cx('g-ui-loading', classVar('g-ui-loading-size-', size, 'md'), className),
  }, Div({ className: 'g-ui-spinner' }));
}
