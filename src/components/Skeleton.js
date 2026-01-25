import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Skeleton(...args) {
  const { props } = splitPropsChildren(args, { height: 'md', width: 'full' });
  const { height = 'md', width = 'full', className, ...rest } = props;
  return Div({
    ...rest,
    className: cx(
      'g-ui-skeleton',
      `g-ui-skeleton-h-${height}`,
      `g-ui-skeleton-w-${width}`,
      className
    ),
  });
}
