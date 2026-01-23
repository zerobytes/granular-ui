import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Divider(...args) {
  const { props } = splitPropsChildren(args);
  const { label, className, ...rest } = props;
  if (label) {
    return Div({ ...rest, className: cx('g-ui-divider-label', className) }, label);
  }
  return Div({ ...rest, className: cx('g-ui-divider', className) });
}
