import { Div, after, state, list } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, classFlag, resolveValue } from '../utils.js';

export function SegmentedControl(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: 'sm' });
  const { value, data, size, scroll, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value));
  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };
  return Div(
    { ...rest, className: cx(classFlag('g-ui-segmented-scroll', scroll)) },
    Div(
      { className: cx('g-ui-segmented', classVar('g-ui-segmented-size-', size, 'sm'), className) },
      list(data, ((item) =>
        Div(
          {
            className: cx(
              'g-ui-segmented-item',
              after(currentState).compute((current) => {
                if (item.get().value === current) return 'g-ui-segmented-active';
                return '';
              })
            ),
            onClick: () => setValue(item.get().value),
          },
          item.label
        )
      ))
    )
  );
}
