import { Div, Input, Button, after, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { state } from 'granular';

export function PasswordInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size, className, ...rest } = props;
  const visible = state(false);
  const inputType = after(visible).compute((next) => (next ? 'text' : 'password'));
  return Div(
    { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
    Input({ type: inputType, ...rest, className: 'g-ui-input' }),
    Button(
      { className: 'g-ui-password-toggle', onClick: () => visible.set(!visible.get()) },
      when(visible, () => 'Hide', () => 'Show')
    )
  );
}
