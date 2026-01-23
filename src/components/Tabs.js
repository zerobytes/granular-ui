import { Button, Div, state, after } from 'granular';
import { cx, splitPropsChildren, classMap } from '../utils.js';

export function Tabs(...args) {
  const { props } = splitPropsChildren(args);
  const { value, onChange, tabs = [], orientation = 'horizontal', className, style } = props;
  const currentState = value?.get ? value : state(value ?? tabs[0]?.value);
  const setValue = (next) => {
    if (value?.set) value.set(next);
    else currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { className: cx('g-ui-tabs', classMap(orientation, { vertical: 'g-ui-tabs-vertical' }), className) },
    Div(
      { className: 'g-ui-tabs-list' },
      tabs.map((tab) =>
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
      after(currentState).compute((v) => (tabs.find((tab) => tab.value === v) || tabs[0])?.content ?? null)
    )
  );
}
