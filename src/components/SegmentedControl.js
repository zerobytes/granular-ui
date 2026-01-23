import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function SegmentedControl(...args) {
  const { props } = splitPropsChildren(args);
  const { value, onChange, data = [], scroll, className, ...rest } = props;
  const current = value?.get ? value.get() : value;
  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };
  return Div(
    { ...rest, className: cx(scroll && 'g-ui-segmented-scroll') },
    Div(
      { className: cx('g-ui-segmented', className) },
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
