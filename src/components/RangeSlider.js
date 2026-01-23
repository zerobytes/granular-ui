import { Input, Div, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function RangeSlider(...args) {
  const { props } = splitPropsChildren(args);
  const { value, onChange, min = 0, max = 100, className, ...rest } = props;
  const current = value?.get ? value.get() : value ?? [min, max];
  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-range', className) },
    Input({
      type: 'range',
      min,
      max,
      value: current[0],
      className: 'g-ui-slider',
      onInput: (ev) => setValue([Number(ev.target.value), current[1]]),
    }),
    Input({
      type: 'range',
      min,
      max,
      value: current[1],
      className: 'g-ui-slider',
      onInput: (ev) => setValue([current[0], Number(ev.target.value)]),
    })
  );
}
