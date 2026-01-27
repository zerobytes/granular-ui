import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function HoverCard(...args) {
  const { props, children } = splitPropsChildren(args, { position: 'left' });
  const { position, content, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-hover-card', className) },
    children,
    Div({
      className: cx(
        'g-ui-hover-card-dropdown',
        [position, (value) => {
          if (value === 'right') return 'g-ui-hover-card-right';
          return '';
        }],
        [position, (value) => {
          if (value === 'center') return 'g-ui-hover-card-center';
          return '';
        }]
      ),
    }, content)
  );
}
