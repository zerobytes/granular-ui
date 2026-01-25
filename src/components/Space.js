import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Space(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size = 'md', className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-space', [size, (value) => `g-ui-space-${value}`], className) });
}
