import { Div, Input } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function SearchInput(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Div(
    { className: cx('g-ui-input-with-icon', className) },
    Div({ className: 'g-ui-text-muted' }, '🔎'),
    Input({ type: 'search', ...rest, className: 'g-ui-input' })
  );
}
