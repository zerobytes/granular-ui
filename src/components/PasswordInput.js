import { Button, after, when, state } from 'granular';
import { splitPropsChildren } from '../utils.js';
import { TextInput } from './TextInput.js';

export function PasswordInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { size, className, rightSection, ...rest } = props;
  const { onChange } = rawProps;
  const visible = state(false);
  const inputType = after(visible).compute((next) => {
    if (next) return 'text';
    return 'password';
  });
  const computedRightSection = after(rightSection).compute((next) =>
    next ?? Button(
      { className: 'g-ui-password-toggle', onClick: () => visible.set(!visible.get()) },
      when(visible, () => 'Hide', () => 'Show')
    )
  );

  return TextInput({
    ...rest,
    size,
    className,
    onChange,
    rightSection: computedRightSection,
    type: inputType,
  });
}
