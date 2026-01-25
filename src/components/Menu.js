import { Div, when } from 'granular';
import { state } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export function Menu(...args) {
  const { props, children } = splitPropsChildren(args, { items: [] });
  const { opened, onChange, items = [], className, style } = props;
  const internal = state(false);
  const current = opened?.get ? opened.get() : resolveValue(opened) ?? internal.get();

  const setOpen = (next) => {
    if (opened?.set) opened.set(next);
    else internal.set(next);
    onChange?.(next);
  };

  return Div(
    { className: cx('g-ui-menu', props.className ?? className) },
    Div({ onClick: () => setOpen(!current) }, children),
    when(current, () =>
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
