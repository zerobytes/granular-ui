import { Div, Input, Label, Span } from 'granular';
import { cx, splitPropsChildren, classVar, resolveBool } from '../utils.js';

export function Checkbox(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, description, size = 'md', indeterminate, className, style, inputProps, ...rest } = props;
  const control = Label(
    { className: 'g-ui-checkbox-control' },
    Input({
      type: 'checkbox',
      indeterminate: resolveBool(indeterminate),
      className: cx(
        'g-ui-checkbox-input',
        classVar('g-ui-checkbox-size-', size, 'md'),
        inputProps?.className
      ),
      ...rest,
    }),
    label ? Span({ className: 'g-ui-checkbox-label' }, label) : null
  );

  return Div(
    { className: cx('g-ui-checkbox', classVar('g-ui-checkbox-size-', size, 'md'), className) },
    control,
    description ? Span({ className: 'g-ui-checkbox-description' }, description) : null
  );
}
