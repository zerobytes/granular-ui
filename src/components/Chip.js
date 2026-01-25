import { Button } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Chip(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md', variant: 'filled' });
  const { checked, onChange, size = 'md', variant = 'filled', className, ...rest } = props;
  const current = checked?.get ? checked.get() : !!checked;
  const setChecked = (next) => {
    if (checked?.set) checked.set(next);
    onChange?.(next);
  };
  return Button(
    {
      ...rest,
      type: 'button',
      className: cx(
        'g-ui-chip',
        classVar('g-ui-chip-size-', size, 'md'),
        classVar('g-ui-chip-variant-', variant, 'filled'),
        current && 'g-ui-chip-active',
        className
      ),
      onClick: () => setChecked(!current),
    },
    children
  );
}
