import { Div, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Collapse(...args) {
  const { props, children } = splitPropsChildren(args);
  const { opened, className, ...rest } = props;
  return when(opened, () => Div({ ...rest, className: cx('g-ui-collapse', className) }, children));
}
