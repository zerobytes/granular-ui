import { splitPropsChildren } from '../utils.js';
import { TextInput } from './TextInput.js';

export function Textarea(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size, leftSection, rightSection, className, ...rest } = props;
  return TextInput({
    ...rest,
    size,
    className,
    leftSection,
    rightSection,
    multiline: true,
  });
}
