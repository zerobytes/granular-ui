import { Div, Input } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function RangePicker(...args) {
  const { props } = splitPropsChildren(args);
  const { value, onChange, className, ...rest } = props;
  const current = value?.get ? value.get() : value ?? ['', ''];

  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-range-picker', className) },
    Input({
      type: 'date',
      className: 'g-ui-input',
      value: current[0],
      onInput: (ev) => setValue([ev.target.value, current[1]]),
    }),
    Input({
      type: 'date',
      className: 'g-ui-input',
      value: current[1],
      onInput: (ev) => setValue([current[0], ev.target.value]),
    })
  );
}
