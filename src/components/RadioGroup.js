import { Div, context, after } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export const radioGroupContext = context({ name: '', selected: null });

export function RadioGroup(...args) {
  const { props, children, rawProps } = splitPropsChildren(args);
  const { className, name, selected, onChange: _onChange, ...rest } = props;
  const { onChange } = rawProps;

  const scope = radioGroupContext.scope({ name: name?.get(), selected: selected?.get() });
  console.log('selected?.get()', selected?.get())

  after(name).change((next) => {
    scope.set().name = next;
  });
  after(selected).change((next) => {
    if (next === scope.selected.get()) return;
    scope.set().selected = next;
  });

  after(scope.selected).change((next) => {
    onChange?.(next);
  });


  return scope.serve(Div({ ...rest, className: cx('g-ui-stack g-ui-gap-sm', className) }, children));
}
