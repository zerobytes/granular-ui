import { Div, Img } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Avatar(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', alt: '' });
  const { src, size = 'md', alt = '', className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-avatar', [size, (value) => `g-ui-avatar-size-${value}`], className) },
    src ? Img({ className: 'g-ui-avatar-img', src, alt }) : children
  );
}
