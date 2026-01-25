import { Span } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function Rating(...args) {
  const { props } = splitPropsChildren(args, { value: 0, max: 5, size: 'md' });
  const { value = 0, max = 5, size = 'md', onChange, className, ...rest } = props;
  const current = value?.get ? value.get() : resolveValue(value);
  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };
  const items = [];
  const maxValue = Number(resolveValue(max)) || 0;
  for (let i = 1; i <= maxValue; i += 1) items.push(i);
  return Span(
    {
      ...rest,
      className: cx('g-ui-rating', classVar('g-ui-rating-size-', size, 'md'), props.className ?? className),
    },
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
