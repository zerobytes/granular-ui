import { Div, when, after, state } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export function Popper(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { opened, content, className, ...rest } = props;
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
    { ...rest, className: cx('g-ui-popper', className) },
    Div({ onClick: () => setOpen(!currentState.get()) }, children),
    when(currentState, () => Div({ className: 'g-ui-popper-dropdown' }, content))
  );
}
