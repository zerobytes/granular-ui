import { Div, Input, Label, Span, when, state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveBool } from '../utils.js';
import { checkedSvg, indeterminateSvg } from '../theme/icons.js';

export function Checkbox(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { checked, label, description, size, indeterminate, className, style, inputProps, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveBool(checked));

  after(checked).change((next) => {
    if (next == null) return;
    currentState.set(!!next);
    onChange?.(next);
  });

  const control = Label(
    { className: 'g-ui-checkbox-control' },
    Input({
      type: 'checkbox',
      indeterminate: indeterminate,
      checked: currentState,
      className: cx(
        'g-ui-checkbox-input',
        classVar('g-ui-checkbox-size-', size, 'md'),
        inputProps?.className
      ),
      ...rest,
    }),
    when(currentState,
      () => Div({ className: 'g-ui-checkbox-checked', innerHTML: checkedSvg }),
      () => {
        if (!currentState.get() && indeterminate.get()) {
          return Div({ className: 'g-ui-checkbox-indeterminate', innerHTML: indeterminateSvg });
        }
      }
    ),
    when(label, () => Span({ className: 'g-ui-checkbox-label' }, label))
  );

  return Div(
    { className: cx('g-ui-checkbox', classVar('g-ui-checkbox-size-', size, 'md'), className) },
    control,
    when(description, () => Span({ className: 'g-ui-checkbox-description' }, description))
  );
}
