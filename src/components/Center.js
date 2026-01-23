import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Center(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-center', className) }, children);
}
