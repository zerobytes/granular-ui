import { Div } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function AvatarGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-avatar-group', className) }, children);
}
