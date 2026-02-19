import { Div, context, state, after } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';


export const switchGroupContext = context({ name: null, selected: null });

export function SwitchGroup(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { className, name, selected, ...rest } = props;
  const { onChange } = rawProps;

  const switchGroupState = switchGroupContext.state();

  const selectedState = state(selected?.get());
  console.log('switchGroupState.selected', switchGroupState.selected)
  after(selectedState).change((next) => {
    console.log('need to call onChange', next);
  })
  // after(selected).change((next) => {
  //   if (next === selectedState.get()) return;
  //   selectedState.set(next);
  // });
  // after(selectedState).change((next) => {
  //   if (next === selectedState.get()) return;
  //   onChange?.(next);
  // });

  const scope = switchGroupContext.scope({ name, selected: selectedState });

  return scope.serve(Div({ ...rest, className: cx('g-ui-switch-group', className) }, children));
}
