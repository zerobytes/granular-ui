import { Button, after, state } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Chip(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: 'md', variant: 'filled' });
  const { checked, size, variant, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(!!checked);
  after(checked).change((next) => {
    if (next == null) return;
    currentState.set(!!next);
  });
  const setChecked = (next) => {
    currentState.set(next);
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
        after(currentState).compute((current) => {
          if (current) return 'g-ui-chip-active';
          return '';
        }),
        className
      ),
      onClick: () => setChecked(!currentState.get()),
    },
    children
  );
}
