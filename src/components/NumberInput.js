import { Div, Input, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function NumberInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size, leftSection, rightSection, className, ...rest } = props;
  return Div(
    { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
    when(leftSection, () => Div({ className: 'g-ui-input-section' }, leftSection)),
    Input({ type: 'text', inputMode: 'decimal', ...rest, className: 'g-ui-input' }),
    when(rightSection, () => Div({ className: 'g-ui-input-section' }, rightSection))
  );
}
