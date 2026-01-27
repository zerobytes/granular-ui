import { Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Burger(...args) {
  const { props } = splitPropsChildren(args);
  const { opened, className, ...rest } = props;
  return Span(
    { ...rest, className: cx('g-ui-burger', [opened, 'g-ui-burger-open'], className) },
    Span(''),
    Span(''),
    Span('')
  );
}
