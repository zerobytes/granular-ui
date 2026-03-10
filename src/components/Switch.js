import { Input, Label, Span, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { switchGroupContext } from './SwitchGroup.js';

export function Switch(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { label, size, className, style, inputProps, checked, value, onChange: _onChange, ...rest } = props;
  const { onChange } = rawProps;
  const checkedState = state(checked);
  const switchGroupState = switchGroupContext.state();

  const switchGroupInfo = after(switchGroupState).compute((value) => {
    return {
      name: value.name,
      type: value.name ? 'radio' : 'checkbox'
    }
  });

  after(switchGroupState.selected).change((selected) => {
    checkedState.set(selected === value.get());
  });

  if (onChange) {
    after(checked).change(next => {
      if (next === checkedState.get()) return;
      checkedState.set(next);
    })
  }

  after(checkedState).change((next) => {
    if ((next === checked.get())) return;
    onChange?.(next);
    const selectedState = switchGroupState.get().selected
    switchGroupState.set().selected = value.get();
  });





  return Label(
    { className: cx('g-ui-switch', classVar('g-ui-switch-size-', size, 'md'), className) },
    Input({
      type: switchGroupInfo.type,
      name: switchGroupInfo.name,
      value: value,
      checked: checkedState,
      className: cx('g-ui-switch-input', classVar('g-ui-switch-size-', size, 'md'), inputProps?.className),
      ...rest,
    }),
    when(label, () => Span({ className: 'g-ui-switch-label' }, label))
  );
}
