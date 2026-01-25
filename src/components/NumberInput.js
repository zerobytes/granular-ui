import { Div, Input } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function NumberInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size = 'md', leftSection, rightSection, className, ...rest } = props;
  return Div(
    { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
    leftSection ? Div({ className: 'g-ui-input-section' }, leftSection) : null,
    Input({ type: 'number', ...rest, className: 'g-ui-input' }),
    rightSection ? Div({ className: 'g-ui-input-section' }, rightSection) : null
  );
}
