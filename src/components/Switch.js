import { Input, Label, Span, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { switchGroupContext } from './SwitchGroup.js';

export function Switch(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { label, size, className, style, inputProps, checked, value, ...rest } = props;
  const checkedState = state(checked);
  const switchGroupState = switchGroupContext.state();

  const switchGroupInfo = after(switchGroupState).compute((value) => {
    return {
      name: value.name?.get(),
      type: value.name?.get() ? 'radio' : 'checkbox'
    }
  });

  after(checked).change((next) => {

    checkedState.set(next);
  });

  after(checkedState).change((next) => {
    const selectedState = switchGroupState.get().selected
    
    selectedState.set(value.get())
    


    console.log('next', switchGroupState.onChange);
    // switchGroupState.onChange?.(value.get(), next);
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
