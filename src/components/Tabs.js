import { Button, Div, state, after, list, when } from 'granular';
import { cx, splitPropsChildren, classMap, classVar, resolveValue, resolveBool } from '../utils.js';

export function Tabs(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    tabs: [],
    orientation: 'horizontal',
    variant: 'default',
    sticky: true,
  });
  const { value, tabs, orientation, variant, sticky, className, style } = props;
  const { onChange } = rawProps;

  const currentState = state(resolveValue(value) ?? resolveValue(tabs)?.[0]?.value ?? '');
  const sentinelNode = state();
  const listNode = state();
  const spacerHeight = state(0);
  const stickyLeft = state(0);
  const stickyWidth = state(0);
  const stickyTop = state(0);
  const isSticky = state(false);
  const lastScrollTop = state(0);
  let listening = false;
  let rafId = null;
  let initScheduled = false;
  const listenerTargets = new Set();

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });

  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };

  const getScrollParents = (node) => {
    const parents = [];
    let current = node?.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      const overflow = `${style.overflow}${style.overflowY}${style.overflowX}`;
      if (/(auto|scroll)/.test(overflow)) {
        parents.push(current);
      }
      current = current.parentElement;
    }
    return parents;
  };

  const getScrollRoot = (node) => getScrollParents(node)[0] ?? null;

  const getRootTop = (root) => (root ? root.getBoundingClientRect().top : 0);

  const getScrollTop = (root) => (root ? root.scrollTop : (window.scrollY || window.pageYOffset || 0));

  const getScrollDirection = (current, last) => {
    if (current > last) return 'down';
    if (current < last) return 'up';
    return 'none';
  };

  const getNextSticky = (direction, sentinelTop, rootTop, currentSticky) => {
    if (direction === 'down' && sentinelTop < rootTop) return true;
    if (direction === 'up' && sentinelTop >= rootTop) return false;
    return currentSticky;
  };

  const updateSticky = () => {
    const sentinelEl = sentinelNode.get();
    const listEl = listNode.get();
    if (!sentinelEl || !listEl) return;
    if (!resolveBool(sticky)) {
      isSticky.set(false);
      spacerHeight.set(0);
      return;
    }
    if (typeof window === 'undefined') return;

    const sentinelRect = sentinelEl.getBoundingClientRect();
    const listRect = listEl.getBoundingClientRect();
    const root = getScrollRoot(sentinelEl);
    const rootTop = getRootTop(root);
    const currentScrollTop = getScrollTop(root);
    const direction = getScrollDirection(currentScrollTop, lastScrollTop.get());
    lastScrollTop.set(currentScrollTop);

    const nextSticky = getNextSticky(direction, sentinelRect.top, rootTop, isSticky.get());

    spacerHeight.set(listRect.height);
    stickyLeft.set(sentinelRect.left);
    stickyWidth.set(sentinelRect.width);
    stickyTop.set(rootTop);
    if (nextSticky !== isSticky.get()) {
      isSticky.set(nextSticky);
    }
  };

  const scheduleUpdate = () => {
    if (rafId != null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      updateSticky();
    });
  };

  const addListenerTarget = (target) => {
    if (!target || listenerTargets.has(target)) return;
    listenerTargets.add(target);
    target.addEventListener('scroll', scheduleUpdate, { passive: true });
  };

  const initListeners = () => {
    if (listening) return;
    const sentinelEl = sentinelNode.get();
    const listEl = listNode.get();
    if (!sentinelEl || !listEl) return;
    if (typeof window === 'undefined') return;
    listening = true;
    updateSticky();
    addListenerTarget(window);
    window.addEventListener('resize', scheduleUpdate);
    getScrollParents(sentinelEl).forEach(addListenerTarget);
  };

  after(listNode, sentinelNode, sticky).change(initListeners);

  if (!initScheduled && typeof window !== 'undefined') {
    initScheduled = true;
    setTimeout(() => initListeners(), 0);
  }

  const stickyStyle = after(isSticky, stickyLeft, stickyWidth, stickyTop).compute((values) => {
    const [active, left, width, top] = values;
    if (!active) {
      return {
        position: 'static',
        top: 'auto',
        left: 'auto',
        width: 'auto',
        zIndex: 'auto',
        background: 'transparent',
      };
    }
    return {
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      background: 'var(--g-ui-surface)',
      zIndex: 100,
    };
  });

  const spacerStyle = after(isSticky, spacerHeight).compute((values) => {
    const [active, height] = values;
    return { height: active ? `${height}px` : '0px' };
  });

  return Div(
    Div(
      {
        className: cx(
          'g-ui-tabs',
          classMap(orientation, { vertical: 'g-ui-tabs-vertical' }),
          classVar('g-ui-tabs-variant-', variant, 'default'),
          props.className ?? className
        ),
      },
      Div({ node: sentinelNode }),
      Div({ style: spacerStyle }),
      Div(
        { node: listNode, className: 'g-ui-tabs-list', style: stickyStyle },
        list(tabs, (tab) =>
          Button(
            {
              className: after(currentState).compute((v) =>
                cx('g-ui-tabs-tab', tab.value === v && 'g-ui-tabs-tab-active')
              ),
              onClick: () => setValue(tab.value),
            },
            tab.label
          )
        )
      ),
      Div(
        { className: 'g-ui-tabs-panel' },
        when(currentState, () => tabs.get()?.find((tab) => tab.value === currentState.get())?.content ?? null)
      )
    )
  );
}
