import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Grid(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-grid-system', className) }, children);
}
