import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function ScrollArea(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md' });
  const { size, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-scroll-area', [size, (value) => `g-ui-scroll-area-${value}`], className) },
    children
  );
}
