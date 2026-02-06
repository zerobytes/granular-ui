import { Span, Div } from 'granular';
import { splitPropsChildren } from '../utils.js';
import { searchSvg } from '../theme/icons.js';
import { TextInput } from './TextInput.js';

export function SearchInput(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size, className, ...rest } = props;
  return TextInput({
    ...rest,
    size,
    className,
    leftSection: Div({ className: 'g-ui-search-input-left-section' , innerHTML: searchSvg }),
    type: 'text',
    inputMode: 'search',
  });
}
