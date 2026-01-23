import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Affix(...args) {
  const { props, children } = splitPropsChildren(args);
  const { position = 'bottom-right', className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-affix', `g-ui-affix-${position}`, className) },
    children
  );
}
