import { Div, portal, after, isSignal, isState, isStatePath, state, when } from 'granular';
import { cx, splitPropsChildren, resolveValue, resolveBool } from '../utils.js';

export function Sidebar(...args) {
  const { props, children } = splitPropsChildren(args);
  
  return when(props.fixed,
    () => FixedSidebar(props, children), 
    () => DrawerSidebar(props, children)
  );
}

const DrawerSidebar = (props, children)=>{
  const {
    open,
    onClose,
    position = 'left',
    size = 'md',
    blur = true,
    fixed = false,
    minWidth = 'button',
    className,
    ...rest
  } = props;
  const mounted = state(false);
  const openState = state(false);
  const transitionMs = 220;
  
  const applyOpen = (next) => {
    if (next) {
      mounted.set(true);
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => openState.set(true));
      } else {
        setTimeout(() => openState.set(true), 0);
      }
      return;
    }
    openState.set(false);
    setTimeout(() => mounted.set(false), transitionMs);
  };

  applyOpen(!!open.get());
  after(open).change((next) => applyOpen(!!next));

  const overlayClass = after(openState, blur).compute((values) => {
    const [open, blur] = values;
  
    return cx(
      'g-ui-sidebar-overlay',
      open && 'g-ui-sidebar-overlay-open',
      !blur && 'g-ui-sidebar-overlay-noblur'
    )
  });

  const drawerClass = after(
    size,
    position,
    openState,
    className
  ).compute((values) => {
    const [size, position, open, className] = values;
    return cx(
      'g-ui-sidebar',
      'g-ui-sidebar-drawer',
      `g-ui-sidebar-size-${size}`,
      position === 'right' ? 'g-ui-sidebar-drawer-right g-ui-sidebar-position-right' : 'g-ui-sidebar-drawer-left',
      open && 'g-ui-sidebar-drawer-open',
      resolveValue(className)
    )
  });

  return when(mounted, () =>
    portal(
      Div({ className: overlayClass, onClick: onClose },
        Div({ className: drawerClass, onClick: (ev) => ev.stopPropagation() },
          children
        )
      )
    )
  )
}

const FixedSidebar = (props, children)=>{
  const {
    open,
    position = 'left',
    size = 'md',
    minWidth = 'button',
    className,
    ...rest
  } = props;
  
  const classNameComposition = after(
    size,
    position,
    open,
    minWidth,
    className,
  ).compute((values)=>{
    const [size, position, open, minWidth, className] = values;
    
    const minWidthValue = minWidth || 'button';
    const minWidthClass =
      minWidthValue === 'button' ? 'g-ui-sidebar-min-button' :
      minWidthValue === 'xs' ? 'g-ui-sidebar-min-xs' :
      minWidthValue === 'sm' ? 'g-ui-sidebar-min-sm' :
      minWidthValue === 'md' ? 'g-ui-sidebar-min-md' :
      null;

    const classNameString = cx(
      'g-ui-sidebar g-ui-sidebar-fixed',
      `g-ui-sidebar-size-${size||'md'}`,
      minWidthClass,
      open && 'g-ui-sidebar-fixed-open',
      className
    );
    return classNameString;
  });
  
  return Div(
    {
      ...rest,
      className: classNameComposition,
    },
    children
  );
}