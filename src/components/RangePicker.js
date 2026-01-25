import { Div, Input } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function RangePicker(...args) {
  const { props } = splitPropsChildren(args, { size: 'md' });
  const { value, onChange, size = 'md', className, ...rest } = props;
  const current = value?.get ? value.get() : resolveValue(value) ?? ['', ''];

  const setValue = (next) => {
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-range-picker', props.className ?? className) },
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      Input({
        type: 'date',
        className: 'g-ui-input',
        value: current[0],
        onInput: (ev) => setValue([ev.target.value, current[1]]),
      })
    ),
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      Input({
        type: 'date',
        className: 'g-ui-input',
        value: current[1],
        onInput: (ev) => setValue([current[0], ev.target.value]),
      })
    )
  );
}
