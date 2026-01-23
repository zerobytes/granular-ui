import { Code as HtmlCode } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Code(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return HtmlCode({ ...rest, className: cx('g-ui-code', className) }, children);
}
