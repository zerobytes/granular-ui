import { Div, Textarea as HtmlTextarea, when } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Textarea(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { size, leftSection, rightSection, className, ...rest } = props;
  return Div(
    {
      className: cx(
        'g-ui-input-wrapper',
        'g-ui-input-multiline',
        classVar('g-ui-input-size-', size, 'md'),
        className
      ),
    },
    when(leftSection, () => Div({ className: 'g-ui-input-section' }, leftSection)),
    HtmlTextarea({
      ...rest,
      className: cx('g-ui-input g-ui-textarea'),
    }),
    when(rightSection, () => Div({ className: 'g-ui-input-section' }, rightSection))
  );
}
