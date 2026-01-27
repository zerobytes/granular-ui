import { Input } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function NumberField(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Input({ type: 'text', inputMode: 'decimal', ...rest, className: cx('g-ui-input g-ui-input-number', className) });
}
