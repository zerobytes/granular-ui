import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Paper(...args) {
  const { props, children } = splitPropsChildren(args, { padding: 'md', radius: 'md', shadow: 'md' });
  const { padding = 'md', radius = 'md', shadow = 'md', className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-paper',
        `g-ui-card-padding-${padding}`,
        `g-ui-card-radius-${radius}`,
        `g-ui-card-shadow-${shadow}`,
        className
      ),
    },
    children
  );
}
