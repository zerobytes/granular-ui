import { Div, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function MultiSelect(...args) {
  const { props } = splitPropsChildren(args);
  const { value, data = [], onChange, className, ...rest } = props;
  const selected = value?.get ? value.get() : value ?? [];

  const toggle = (val) => {
    const next = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : selected.concat(val);
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-select-multi', className) },
    data.map((item) =>
      Span(
        {
          className: cx('g-ui-select-tag', selected.includes(item.value) && 'g-ui-chip-active'),
          onClick: () => toggle(item.value),
        },
        item.label
      )
    )
  );
}
