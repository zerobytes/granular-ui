import { Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Rating(...args) {
  const { props } = splitPropsChildren(args);
  const { value = 0, max = 5, onChange, className, ...rest } = props;
  const current = value?.get ? value.get() : value;
  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };
  const items = [];
  for (let i = 1; i <= max; i += 1) items.push(i);
  return Span(
    { ...rest, className: cx('g-ui-rating', className) },
    items.map((i) =>
      Span(
        {
          className: cx('g-ui-rating-item', i <= current && 'g-ui-rating-item-active'),
          onClick: () => setValue(i),
        },
        '★'
      )
    )
  );
}
