import { Div, Span, when, state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function Select(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: 'md' });
  const { data, value, size, leftSection, rightSection, placeholder, className, ...rest } = props;
  const { onChange } = rawProps;
  const open = state(false);
  const currentState = state(resolveValue(value) ?? '');

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved === undefined) return;
    currentState.set(resolved ?? '');
  });

  const selectValue = (next) => {
    currentState.set(next);
    onChange?.(next);
    open.set(false);
  };

  const valueClass = after(currentState).compute((current) => {
    if (!current) return 'g-ui-select-placeholder';
    return '';
  });
  const displayLabel = after(currentState).compute((current) => {
    const items = resolveValue(data) ?? [];
    const match = items.find((item) => item.value === current);
    if (current) return match?.label ?? '';
    return placeholder ?? '';
  });

  return Div(
    { ...rest, className: cx('g-ui-select-root', className) },
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      when(leftSection, () => Div({ className: 'g-ui-input-section' }, leftSection)),
      Div(
        {
          className: cx('g-ui-select', valueClass),
          onClick: () => open.set(!open.get()),
        },
        Span({ className: 'g-ui-select-value' }, displayLabel)
      ),
      when(rightSection, () => Div({ className: 'g-ui-input-section' }, rightSection), () =>
        Span({ className: 'g-ui-select-caret' }, '▾')
      )
    ),
    when(open, () =>
      Div(
        { className: 'g-ui-select-dropdown' },
        (resolveValue(data) ?? []).map((item) =>
          Div(
            {
              className: cx(
                'g-ui-select-item',
                after(currentState).compute((current) => {
                  if (current === item.value) return 'g-ui-select-item-active';
                  return '';
                })
              ),
              onClick: () => selectValue(item.value),
            },
            item.label
          )
        )
      )
    )
  );
}
