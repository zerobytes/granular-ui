import { Div } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function SegmentedControl(...args) {
  const { props } = splitPropsChildren(args, { data: [], size: 'sm' });
  const { value, onChange, data = [], size = 'sm', scroll, className, ...rest } = props;
  const current = value?.get ? value.get() : resolveValue(value);
  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };
  return Div(
    { ...rest, className: cx(scroll && 'g-ui-segmented-scroll') },
    Div(
      { className: cx('g-ui-segmented', classVar('g-ui-segmented-size-', size, 'sm'), props.className ?? className) },
      data.map((item) =>
        Div(
          {
            className: cx('g-ui-segmented-item', item.value === current && 'g-ui-segmented-active'),
            onClick: () => setValue(item.value),
          },
          item.label
        )
      )
    )
  );
}
