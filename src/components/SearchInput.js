import { Div, Input } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function SearchInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size = 'md', className, ...rest } = props;
  return Div(
    { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
    Div({ className: 'g-ui-input-section' }, '🔎'),
    Input({ type: 'text', inputMode: 'search', ...rest, className: 'g-ui-input' })
  );
}
