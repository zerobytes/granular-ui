import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function ScrollArea(...args) {
  const { props, children } = splitPropsChildren(args);
  const { size = 'md', className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-scroll-area', `g-ui-scroll-area-${size}`, className) },
    children
  );
}
