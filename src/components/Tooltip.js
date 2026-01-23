import { Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Tooltip(...args) {
  const { props, children } = splitPropsChildren(args);
  const { label, className, style } = props;
  return Span(
    { className: cx('g-ui-tooltip', className) },
    children,
    Span({ className: 'g-ui-tooltip-content' }, label)
  );
}
