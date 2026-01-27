import { Button, Div, state, after, list, when } from 'granular';
import { cx, splitPropsChildren, classMap, classVar } from '../utils.js';

export function Tabs(...args) {
  const { props, rawProps } = splitPropsChildren(args, { tabs: [], orientation: 'horizontal', variant: 'default' });
  const { value, tabs, orientation, variant, className, style } = props;
  const { onChange } = rawProps;

  const currentState = state(value?.get() ?? tabs.get()?.[0]?.value ?? '');

  after(value).change((next) => {
    currentState.set(next);
  });

  const setValue = (next) => {
    currentState.set(next);
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
      list(tabs, (tab) =>
        Button(
          {
            className: after(currentState).compute((v) =>
              cx('g-ui-tabs-tab', tab.value === v && 'g-ui-tabs-tab-active')
            ),
            onClick: () => setValue(tab.value),
          },
          tab.label
        )
      )
    ),
    Div(
      { className: 'g-ui-tabs-panel' },
      when(currentState, () => {
        console.log('tabs', tabs.get())
        return tabs.get()?.find((tab) => tab.value === currentState.get())?.content ?? null
      })
    )
  );
}
