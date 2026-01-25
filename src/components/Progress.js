import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Progress(...args) {
  const { props } = splitPropsChildren(args, { value: 0, color: 'primary' });
  const { value = 0, color = 'primary', className, ...rest } = props;
  const pct = Math.max(0, Math.min(100, value));
  const bucket = Math.round(pct / 5) * 5;
  return Div(
    { ...rest, className: cx('g-ui-progress', `g-ui-progress-${bucket}`, color && `g-ui-progress-${color}`, className) },
    Div({ className: 'g-ui-progress-bar' })
  );
}
