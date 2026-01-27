import { Div, portal, when } from 'granular';
import { cx, splitPropsChildren, classVar, classMap } from '../utils.js';

export function Drawer(...args) {
  const { props, children } = splitPropsChildren(args, {
    position: 'right',
    size: 'md',
    overlay: 'normal',
    shadowed: true,
  });
  const { opened, onClose, position, size, overlay, shadowed, className, style } = props;
  return when(opened, () =>
    portal(
      Div(
        { className: cx('g-ui-drawer-overlay', classVar('g-ui-drawer-overlay-', overlay, 'normal')), onClick: onClose },
        Div(
          {
            className: cx(
              'g-ui-drawer',
              classMap(shadowed, { true: 'g-ui-drawer-shadowed' }, true),
              classVar('g-ui-drawer-', position, 'right'),
              classVar('g-ui-drawer-size-', size, 'md'),
              className
            ),
            onClick: (ev) => ev.stopPropagation(),
          },
          children
        )
      )
    )
  );
}
