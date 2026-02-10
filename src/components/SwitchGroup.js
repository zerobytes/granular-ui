import { Div } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function SwitchGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-switch-group', className) }, children);
}
