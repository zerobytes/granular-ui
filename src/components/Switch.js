import { Input, Label, Span } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Switch(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, size = 'md', className, style, inputProps, ...rest } = props;
  return Label(
    { className: cx('g-ui-switch', classVar('g-ui-switch-size-', size, 'md'), className) },
    Input({
      type: 'checkbox',
      className: cx('g-ui-switch-input', classVar('g-ui-switch-size-', size, 'md'), inputProps?.className),
      ...rest,
    }),
    label ? Span({ className: 'g-ui-switch-label' }, label) : null
  );
}
