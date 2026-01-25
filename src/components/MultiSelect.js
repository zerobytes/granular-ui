import { Div, Span } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function MultiSelect(...args) {
  const { props } = splitPropsChildren(args, { data: [], size: 'md' });
  const { value, data = [], size = 'md', onChange, className, ...rest } = props;
  const selected = value?.get ? value.get() : resolveValue(value) ?? [];

  const toggle = (val) => {
    const next = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : selected.concat(val);
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-select-multi',
        classVar('g-ui-select-multi-size-', size, 'md'),
        props.className ?? className
      ),
    },
    data.map((item) =>
      Span(
        {
          className: cx('g-ui-select-tag', [selected.includes(item.value), 'g-ui-chip-active']),
          onClick: () => toggle(item.value),
        },
        item.label
      )
    )
  );
}
