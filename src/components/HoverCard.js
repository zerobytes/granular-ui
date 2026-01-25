import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function HoverCard(...args) {
  const { props, children } = splitPropsChildren(args, { position: 'left' });
  const { position = 'left', content, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-hover-card', className) },
    children,
    Div({
      className: cx(
        'g-ui-hover-card-dropdown',
        [position, (value) => (value === 'right' ? 'g-ui-hover-card-right' : '')],
        [position, (value) => (value === 'center' ? 'g-ui-hover-card-center' : '')]
      ),
    }, content)
  );
}
