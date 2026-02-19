import { Div, Input, Label, Span, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { radioGroupContext } from './RadioGroup.js';


export function Radio(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { label, name, value, checked, description, size, className, inputProps, ...rest } = props;
  const { onChange } = rawProps;

  const checkedState = state(checked?.get() ?? false);

  const radioGroupState = radioGroupContext.state();
  const inputName = after(radioGroupState.name, name).compute(([radioGroupName, inputGroupName]) => radioGroupName || inputGroupName);

  after(checked, radioGroupState.selected).change((values) => {
    const [checkedValue, selectedValue] = values;
    if (radioGroupState.get().name) {
      checkedState.set(selectedValue === value.get());
    } else {
      checkedState.set(checkedValue);
    }
  });

  after(checkedState).change((next) => {
    onChange?.(next);
    if (!next) return;
    if (radioGroupState.get().name) {
      radioGroupState.set().selected = value.get();
    }
  });

  const control = Label(
    { className: 'g-ui-radio-control' },
    Input({
      type: 'radio',
      name: inputName,
      value: value,
      checked: checkedState,
      className: cx('g-ui-radio-input', classVar('g-ui-radio-size-', size, 'md'), inputProps?.className),
      ...rest,
    }),
    when(label, () => Span({ className: 'g-ui-radio-label' }, label))
  );

  return Div(
    { className: cx('g-ui-radio', classVar('g-ui-radio-size-', size, 'md'), className) },
    control,
    when(description, () => Span({ className: 'g-ui-radio-description' }, description))
  );
}
