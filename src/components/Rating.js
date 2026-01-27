import { Span, after, state } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function Rating(...args) {
  const { props, rawProps } = splitPropsChildren(args, { value: 0, max: 5, size: 'md' });
  const { value, max, size, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value));
  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setValue = (next) => {
    currentState.set(next);
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
          className: cx(
            'g-ui-rating-item',
            after(currentState).compute((current) => {
              if (i <= current) return 'g-ui-rating-item-active';
              return '';
            })
          ),
          onClick: () => setValue(i),
        },
        '★'
      )
    )
  );
}
