import { A } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Anchor(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return A({ ...rest, className: cx('g-ui-anchor', className) }, children);
}
