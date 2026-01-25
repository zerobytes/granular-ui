import { Div } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Card(...args) {
  const { props, children } = splitPropsChildren(args, { padding: 'md', radius: 'md', shadow: 'none' });
  const { padding = 'md', radius = 'md', shadow = 'none', className, style, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-card',
        classVar('g-ui-card-padding-', padding, 'md'),
        classVar('g-ui-card-radius-', radius, 'md'),
        classVar('g-ui-card-shadow-', shadow, 'md'),
        className
      ),
    },
    children
  );
}
