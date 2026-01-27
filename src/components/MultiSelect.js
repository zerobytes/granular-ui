import { Div, Span, after, state } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function MultiSelect(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: 'md' });
  const { value, data, size, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value) ?? []);
  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const selected = currentState.get() ?? [];

  const toggle = (val) => {
    const next = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : selected.concat(val);
    currentState.set(next);
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
