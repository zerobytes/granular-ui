import { Div, Input, Label, Span, when } from 'granular';
import { cx, splitPropsChildren, classVar, resolveBool } from '../utils.js';

const checkSymbolSVG = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';

export function Checkbox(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, description, size, indeterminate, className, style, inputProps, ...rest } = props;
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
    when(label, () => Span({ className: 'g-ui-checkbox-label' }, label))
  );

  return Div(
    { className: cx('g-ui-checkbox', classVar('g-ui-checkbox-size-', size, 'md'), className) },
    control,
    when(description, () => Span({ className: 'g-ui-checkbox-description' }, description))
  );
}
