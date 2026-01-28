import { Div, when, after, state, portal } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

export const menuControlStore = state({ currentOpenState: null })

export function Menu(...args) {
  const mainNode = state();
  const dropdownNode = state();
  const dropdownStyle = state({});
  const { props, rawProps, children } = splitPropsChildren(args, { position: 'right' });
  const { opened, content, position, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(opened) ?? false);
  after(opened).change((value) => {
    const resolved = resolveValue(value);
    if (resolved == null) return;
    currentState.set(!!resolved);
    if (!!resolved) {
      closeOldSetCurrent()
    }
  });

  const closeOldSetCurrent = () => {
    if (menuControlStore.get().currentOpenState === currentState) return;
    menuControlStore.get().currentOpenState?.set(false)
    menuControlStore.set().currentOpenState = currentState;
  }

  if (opened.get()) {
    closeOldSetCurrent()
  }

  const updatePosition = () => {
    const trigger = mainNode.get();
    const dropdown = dropdownNode.get();
    if (!trigger || !dropdown) return;
    const rect = trigger.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    const positionValue = resolveValue(position) ?? 'right';
    const top = rect.bottom + 8;
    let left = rect.left;
    if (positionValue === 'center') {
      left = rect.left + rect.width / 2 - dropdownRect.width / 2;
    }
    if (positionValue === 'right') {
      left = rect.right - dropdownRect.width;
    }
    dropdownStyle.set({
      top: `${top}px`,
      left: `${left}px`,
    });
  };

  const setOpen = (next) => {
    currentState.set(next);
    onChange?.(next);

    if (next) {
      closeOldSetCurrent()
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => updatePosition());
      } else {
        setTimeout(() => updatePosition(), 0);
      }
    }
  };
  const toggle = () => setOpen(!currentState.get())
  const close = () => setOpen(false)

  return Div(
    { ...rest, node: mainNode, className: cx('g-ui-menu', className) },
    Div({ onClick: toggle }, children),
    when(currentState, () =>
      portal(
        Div(
          Div({ className: 'g-ui-menu-overlay', onClick: close }),
          Div(
            { className: 'g-ui-menu-dropdown', node: dropdownNode, style: dropdownStyle },
            content
          )
        )
      )
    )
  );
}
