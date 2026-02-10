import { Blockquote as HtmlBlockquote } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function Blockquote(...args) {
  const { props, children } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return HtmlBlockquote({ ...rest, className: cx('g-ui-blockquote', className) }, children);
}
