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

  const setOpen = (next) => {
    if (next) placement.set(getDropdownPlacement(rootNode.get()));
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, node: rootNode, className: cx('g-ui-popper', className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(currentState, () => Div({ className: cx('g-ui-popper-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-popper-dropdown-top' : '')) }, content))
  );
}
