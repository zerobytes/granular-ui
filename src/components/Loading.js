import { Div, Span, after, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Loading(...args) {
  const { props } = splitPropsChildren(args, { variant: 'spinner', size: 'md' });
  const { variant, size, className } = props;
  const isDots = after(variant).compute((next) => next === 'dots');
  const isBars = after(variant).compute((next) => next === 'bars');
  return when(isDots,
    () => Div({
      className: cx('g-ui-loading g-ui-dots', classVar('g-ui-loading-size-', size, 'md'), className),
    }),
    () => when(
      isBars,
      () => Div(
        { className: cx('g-ui-loading g-ui-bars', classVar('g-ui-loading-size-', size, 'md'), className) },
        Span(''),
        Span(''),
        Span('')
      ),
      () => Div(
        {
          className: cx('g-ui-loading', classVar('g-ui-loading-size-', size, 'md'), className),
        },
        Div({ className: 'g-ui-spinner' })
      )
    )
  );
}
