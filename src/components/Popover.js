import { Div, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, getDropdownPlacement } from '../utils.js';

export function Popover(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { position: 'left' });
  const { opened, position, content, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(opened) ?? false);
  const placement = state('bottom');
  const rootNode = state(null);
  after(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(!!resolved);
  });

  let outsideCleanup = null;
  after(currentState).change((next) => {
    if (outsideCleanup) { outsideCleanup(); outsideCleanup = null; }
    if (!next) return;
    const mouseHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      setOpen(false);
    };
    const focusHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('focusin', focusHandler);
    outsideCleanup = () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('focusin', focusHandler);
    };
  });

  const setOpen = (next) => {
    if (next) placement.set(getDropdownPlacement(rootNode.get(), 320));
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, node: rootNode, className: cx('g-ui-popover', props.className ?? className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(
      currentState,
      () =>
        Div(
          {
            className: cx(
              'g-ui-popover-dropdown',
              after(placement).compute((p) => p === 'top' ? 'g-ui-popover-dropdown-top' : ''),
              position === 'right' && 'g-ui-popover-right',
              position === 'center' && 'g-ui-popover-center'
            ),
            onClick: (ev) => ev.stopPropagation(),
          },
          content
        )
    )
  );
}
