import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Grid(...args) {
  const { props, children } = splitPropsChildren(args, { gap: 'md' });
  const { className, gap, ...rest } = props;
  return Div({ ...rest, className: cx('g-ui-grid-system', [gap, (value) => `g-ui-gap-${value}`], className) }, children);
}
