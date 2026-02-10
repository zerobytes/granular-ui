import { Div } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function BadgeGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-badge-group', className) }, children);
}
