import { Img } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function Image(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Img({ ...rest, className: cx('g-ui-image', className) });
}
