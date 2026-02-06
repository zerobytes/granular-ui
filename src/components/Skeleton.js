import { Div, after } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Skeleton(...args) {
  const { props } = splitPropsChildren(args, { height: 'md', width: 'full' });
  const { height, width, className, ...rest } = props;
  const customStyle = after(height, width).compute(([h, w]) => {
    const style = {};
    if (!isNaN(h)) style.height = `${h}px`;
    if (!isNaN(w)) style.width = `${w}px`;
    return style;
  });

  return Div({
    ...rest,
    style: { width: customStyle.width, height: customStyle.height, ...(rest.style || {}) },
    className: cx(
      'g-ui-skeleton',
      [height, (value) => `g-ui-skeleton-h-${value}`],
      [width, (value) => `g-ui-skeleton-w-${value}`],
      className
    ),
  });
}
