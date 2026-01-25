import { Button, Div, state, after } from 'granular';
import { cx, splitPropsChildren, classMap, classVar, resolveValue } from '../utils.js';

export function Tabs(...args) {
  const { props } = splitPropsChildren(args, { tabs: [], orientation: 'horizontal', variant: 'default' });
  const { value, onChange, tabs = [], orientation = 'horizontal', variant = 'default', className, style } = props;
  const resolvedTabs = resolveValue(tabs) || [];
  const currentState = value?.get ? value : state(resolveValue(value ?? resolvedTabs[0]?.value));
  const setValue = (next) => {
    if (value?.set) value.set(next);
    else currentState.set(next);
    onChange?.(next);
  };

  return Div(
    {
      className: cx(
        'g-ui-tabs',
        classMap(orientation, { vertical: 'g-ui-tabs-vertical' }),
        classVar('g-ui-tabs-variant-', variant, 'default'),
        props.className ?? className
      ),
    },
    Div(
      { className: 'g-ui-tabs-list' },
      resolvedTabs.map((tab) =>
        Button(
          {
            className: after(currentState).compute((v) =>
              cx('g-ui-tabs-tab', tab.value === v && 'g-ui-tabs-tab-active')
            ),
            onClick: () => setValue(tab.value),
            type: 'button',
          },
          tab.label
        )
      )
    ),
    Div(
      { className: 'g-ui-tabs-panel' },
      after(currentState).compute((v) => (resolvedTabs.find((tab) => tab.value === v) || resolvedTabs[0])?.content ?? null)
    )
  );
}
