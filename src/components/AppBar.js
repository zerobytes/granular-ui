import { Div } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function AppBar(...args) {
  const { props, children } = splitPropsChildren(args, { position: 'sticky' });
  const { position = 'sticky', className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx('g-ui-appbar', classVar('g-ui-appbar-', position, 'sticky'), className),
    },
    children
  );
}
