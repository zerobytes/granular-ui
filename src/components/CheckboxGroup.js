import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function CheckboxGroup(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-checkbox-group', className) }, children);
}
