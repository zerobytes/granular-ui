import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function SimpleGrid(...args) {
  const { props, children } = splitPropsChildren(args, { cols: 3 });
  const { cols, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-grid', [cols, (value) => `g-ui-grid-cols-${value}`], className) },
    children
  );
}
