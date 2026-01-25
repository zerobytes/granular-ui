import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function ProgressRing(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size = 'md', className, ...rest } = props;
  return Div({
    ...rest,
    className: cx('g-ui-progress-ring', [size, (value) => `g-ui-progress-ring-size-${value}`], className),
  });
}
