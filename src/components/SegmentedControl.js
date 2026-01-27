import { Div, after, state } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

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
    { ...rest, className: cx(scroll && 'g-ui-segmented-scroll') },
    Div(
      { className: cx('g-ui-segmented', classVar('g-ui-segmented-size-', size, 'sm'), props.className ?? className) },
      data.map((item) =>
        Div(
          {
            className: cx(
              'g-ui-segmented-item',
            after(currentState).compute((current) => {
              if (item.value === current) return 'g-ui-segmented-active';
              return '';
            })
            ),
            onClick: () => setValue(item.value),
          },
          item.label
        )
      )
    )
  );
}
