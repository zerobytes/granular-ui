import { A } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function NavLink(...args) {
  const { props, children } = splitPropsChildren(args);
  const { active, className, ...rest } = props;
  return A(
    { ...rest, className: cx('g-ui-navlink', active && 'g-ui-navlink-active', className) },
    children
  );
}
