import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function SimpleGrid(...args) {
  const { props, children } = splitPropsChildren(args, { cols: 3, gap: 'md' });
  const { cols, gap, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-grid', [gap, (value) => `g-ui-gap-${value}`], [cols, (value) => `g-ui-grid-cols-${value}`], className) },
    children
  );
}
