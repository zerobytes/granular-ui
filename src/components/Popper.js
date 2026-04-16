import { Div, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, getDropdownPlacement } from '../utils.js';

export function Popper(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { opened, content, className, ...rest } = props;
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
    if (next) placement.set(getDropdownPlacement(rootNode.get()));
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, node: rootNode, className: cx('g-ui-popper', className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(currentState, () =>
      Div(
        {
          className: cx('g-ui-popper-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-popper-dropdown-top' : '')),
          onClick: (ev) => ev.stopPropagation(),
        },
        content
      )
    )
  );
}
