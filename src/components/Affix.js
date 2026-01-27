import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Affix(...args) {
  const { props, children } = splitPropsChildren(args, { position: 'bottom-right' });
  const { position, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-affix', [position, (value) => `g-ui-affix-${value}`], className) },
    children
  );
}
