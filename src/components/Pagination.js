import { Button, Div, state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function Pagination(...args) {
  const { props } = splitPropsChildren(args, { total: 1, size: 'md' });
  const { page, total = 1, size = 'md', onChange, className, ...rest } = props;
  const currentState = page?.get ? page : state(resolveValue(page ?? 1));
  const setPage = (next) => {
    const totalValue = Number(resolveValue(total)) || 1;
    const clamped = Math.max(1, Math.min(totalValue, next));
    if (page?.set) page.set(clamped);
    else currentState.set(clamped);
    onChange?.(clamped);
  };
  const items = [];
  const totalValue = Number(resolveValue(total)) || 1;
  for (let i = 1; i <= totalValue; i += 1) items.push(i);
  return Div(
    {
      ...rest,
      className: cx('g-ui-pagination', classVar('g-ui-pagination-size-', size, 'md'), props.className ?? className),
    },
    Button(
      {
        className: 'g-ui-pagination-item',
        onClick: () => setPage((currentState.get?.() ?? currentState) - 1),
        disabled: after(currentState).compute((v) => v <= 1),
      },
      '<'
    ),
    items.map((i) =>
      Button(
        {
          className: after(currentState).compute((v) =>
            cx('g-ui-pagination-item', i === v && 'g-ui-pagination-item-active')
          ),
          onClick: () => setPage(i),
        },
        String(i)
      )
    ),
    Button(
      {
        className: 'g-ui-pagination-item',
        onClick: () => setPage((currentState.get?.() ?? currentState) + 1),
        disabled: after(currentState).compute((v) => v >= total),
      },
      '>'
    )
  );
}
