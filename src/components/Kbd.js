import { Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Kbd(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Span({ ...rest, className: cx('g-ui-kbd', className) }, children);
}
