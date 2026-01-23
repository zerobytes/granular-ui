import { Input } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function DateInput(...args) {
  const { props } = splitPropsChildren(args);
  const { className, ...rest } = props;
  return Input({ type: 'date', ...rest, className: cx('g-ui-input', className) });
}
