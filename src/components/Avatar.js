import { Div, Img, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Avatar(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', alt: '' });
  const { src, size, alt, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-avatar', [size, (value) => `g-ui-avatar-size-${value}`], className) },
    when(src, () => Img({ className: 'g-ui-avatar-img', src, alt }), () => {
      console.log('children', children);
      return children;
    })
  );
}
