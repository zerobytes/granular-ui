import { Input, Label, Span, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { switchGroupContext } from './SwitchGroup.js';

export function Switch(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { label, size, className, style, inputProps, checked, value, name, type, onChange: _onChange, onInput: _onInput, ...rest } = props;
  console.log('_onChange', _onChange)
  const { onChange } = rawProps;
  const checkedState = state(checked?.get() ?? false);
  const switchGroupState = switchGroupContext.state();

  const switchGroupInfo = after(switchGroupState, name, type).compute(([value, name, type]) => {
    return {
      name: name ?? value.name ?? '',
      type: type ?? (value.name ? 'radio' : 'checkbox')
    }
  });

  after(switchGroupState.selected).change((selected) => {
    checkedState.set(selected === value.get());
  });


  after(checked).change(next => {
    checkedState.set(next);
  })

  after(checkedState).change((next) => {
    onChange?.(next);
    if (!next) {
      const selectedState = switchGroupState.get().selected
      if(selectedState === value.get()) {
        switchGroupState.set().selected = null;
      }
      return
    }
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
