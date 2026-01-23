import { Textarea as HtmlTextarea } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Textarea(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return HtmlTextarea({ ...rest, className: cx('g-ui-input g-ui-textarea', className) });
}
