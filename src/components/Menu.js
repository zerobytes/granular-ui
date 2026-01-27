import { Div, when, after, state } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export function Menu(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { items: [] });
  const { opened, items, className, style } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(opened) ?? false);
  after(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(!!resolved);
  });

  const setOpen = (next) => {
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { className: cx('g-ui-menu', props.className ?? className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(currentState, () =>
      Div(
        { className: 'g-ui-menu-dropdown' },
        resolveValue(items).map((item) =>
          Div(
            {
              className: 'g-ui-menu-item',
              onClick: () => {
                item.onClick?.();
                setOpen(false);
              },
            },
            item.label
          )
        )
      )
    )
  );
}
