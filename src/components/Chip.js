import { Button } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Chip(...args) {
  const { props, children } = splitPropsChildren(args);
  const { checked, onChange, className, ...rest } = props;
  const current = checked?.get ? checked.get() : !!checked;
  const setChecked = (next) => {
    if (checked?.set) checked.set(next);
    onChange?.(next);
  };
  return Button(
    {
      ...rest,
      type: 'button',
      className: cx('g-ui-chip', current && 'g-ui-chip-active', className),
      onClick: () => setChecked(!current),
    },
    children
  );
}
