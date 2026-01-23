import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Space(...args) {
  const { props } = splitPropsChildren(args);
  const { size = 'md', className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-space', `g-ui-space-${size}`, className) });
}
