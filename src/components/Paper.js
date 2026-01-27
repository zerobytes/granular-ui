import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Paper(...args) {
  const { props, children } = splitPropsChildren(args, { padding: 'md', radius: 'md', shadow: 'none' });
  const { padding, radius, shadow, className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-paper',
        [padding, (value) => `g-ui-card-padding-${value}`],
        [radius, (value) => `g-ui-card-radius-${value}`],
        [shadow, (value) => `g-ui-card-shadow-${value}`],
        className
      ),
    },
    children
  );
}
