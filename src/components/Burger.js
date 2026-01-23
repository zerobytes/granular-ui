import { Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Burger(...args) {
  const { props } = splitPropsChildren(args);
  const { opened, className, ...rest } = props;
  const isOpen = opened?.get ? opened.get() : opened;
  return Span(
    { ...rest, className: cx('g-ui-burger', isOpen && 'g-ui-burger-open', className) },
    Span(''),
    Span(''),
    Span('')
  );
}
