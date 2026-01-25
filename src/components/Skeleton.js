import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Skeleton(...args) {
  const { props } = splitPropsChildren(args, { height: 'md', width: 'full' });
  const { height = 'md', width = 'full', className, ...rest } = props;
  return Div({
    ...rest,
    className: cx(
      'g-ui-skeleton',
      [height, (value) => `g-ui-skeleton-h-${value}`],
      [width, (value) => `g-ui-skeleton-w-${value}`],
      className
    ),
  });
}
