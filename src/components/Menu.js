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

  const parsePosition = (value) => {
    const raw = String(value ?? 'right').toLowerCase();
    const parts = raw.split('-').filter(Boolean);
    if (parts.length === 1) {
      const single = parts[0];
      if (single === 'top' || single === 'bottom') return { placement: single, align: 'center' };
      if (single === 'left' || single === 'right') return { placement: 'bottom', align: single };
      if (single === 'center') return { placement: 'bottom', align: 'center' };
      return { placement: 'bottom', align: 'right' };
    }
    const [first, second] = parts;
    if (first === 'top' || first === 'bottom') {
      return { placement: first, align: second || 'center' };
    }
    if (first === 'left' || first === 'right') {
      return { placement: first, align: second || 'center' };
    }
    return { placement: 'bottom', align: 'right' };
  };

  const updatePosition = () => {
    const trigger = mainNode.get();
    const dropdown = dropdownNode.get();
    if (!trigger || !dropdown) return;
    if (typeof window === 'undefined') return;
    const rect = trigger.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    const positionValue = resolveValue(position) ?? 'right';
    const spaceVar = getComputedStyle(document.documentElement).getPropertyValue('--g-ui-space-20');
    const margin = Number.parseFloat(spaceVar) || 20;
    const viewportWidth = window.innerWidth || 0;
    const viewportHeight = window.innerHeight || 0;
    const maxLeft = Math.max(margin, viewportWidth - dropdownRect.width - margin);
    const maxTop = Math.max(margin, viewportHeight - dropdownRect.height - margin);
    const { placement, align } = parsePosition(positionValue);
    const gap = 8;
    let top = rect.bottom + gap;
    let left = rect.left;
    if (placement === 'top' || placement === 'bottom') {
      top = placement === 'top' ? rect.top - dropdownRect.height - gap : rect.bottom + gap;
      if (align === 'center') {
        left = rect.left + rect.width / 2 - dropdownRect.width / 2;
      } else if (align === 'right') {
        left = rect.right - dropdownRect.width;
      } else {
        left = rect.left;
      }
    } else if (placement === 'left' || placement === 'right') {
      left = placement === 'left' ? rect.left - dropdownRect.width - gap : rect.right + gap;
      if (align === 'center') {
        top = rect.top + rect.height / 2 - dropdownRect.height / 2;
      } else if (align === 'bottom') {
        top = rect.bottom - dropdownRect.height;
      } else {
        top = rect.top;
      }
    }
    left = Math.max(margin, Math.min(left, maxLeft));
    top = Math.max(margin, Math.min(top, maxTop));
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
