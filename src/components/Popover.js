import { Div, when, after, state } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export function Popover(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { position: 'left' });
  const { opened, position, content, className, ...rest } = props;
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
    { ...rest, className: cx('g-ui-popover', props.className ?? className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(
      currentState,
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
