import { Div, Input } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';
import { state } from 'granular';

export function PinInput(...args) {
  const { props } = splitPropsChildren(args);
  const { length = 4, value, onChange, className, ...rest } = props;
  const internal = state(Array.from({ length }, () => ''));
  const current = value?.get ? value.get() : value ?? internal.get();
  const setValue = (next) => {
    if (value?.set) value.set(next);
    else internal.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-pin-inputs', className) },
    Array.from({ length }).map((_, idx) =>
      Input({
        className: 'g-ui-pin-input',
        maxLength: 1,
        value: current[idx] || '',
        onInput: (ev) => {
          const next = current.slice();
          next[idx] = ev.target.value;
          setValue(next);
        },
      })
    )
  );
}
