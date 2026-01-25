import { Div, when } from 'granular';
import { state } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export function Popover(...args) {
  const { props, children } = splitPropsChildren(args, { position: 'left' });
  const { opened, onChange, position = 'left', content, className, ...rest } = props;
  const internal = state(false);
  const current = opened?.get ? opened.get() : resolveValue(opened) ?? internal.get();

  const setOpen = (next) => {
    if (opened?.set) opened.set(next);
    else internal.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-popover', props.className ?? className) },
    Div({ onClick: () => setOpen(!current) }, children),
    when(
      current,
      () =>
        Div(
          {
            className: cx(
              'g-ui-popover-dropdown',
              position === 'right' && 'g-ui-popover-right',
              position === 'center' && 'g-ui-popover-center'
            ),
          },
          content
        )
    )
  );
}
