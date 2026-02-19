import { Div, context, state, after } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';


export const switchGroupContext = context({ name: null, selected: null });

export function SwitchGroup(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { className, name, selected, onChange: _onChange, ...rest } = props;
  const { onChange } = rawProps;

  const scope = switchGroupContext.scope({ name: name?.get(), selected: selected?.get() });
  
  after(scope.selected).change((next) => {
    onChange?.(next);
  });
  
  after(selected).change((next) => {
    if(next === scope.selected.get()) return;
    scope.set().selected = next;
  })

  return scope.serve(Div({ ...rest, className: cx('g-ui-switch-group', className) }, children));
}
