import { Ul } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function List(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Ul({ ...rest, className: cx('g-ui-list', className) }, children);
}
