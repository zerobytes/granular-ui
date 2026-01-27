import { Div, Input, after, state } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function PinInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { length: 4 });
  const { length, value, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(Array.from({ length }, () => ''));
  after(value).change((next) => {
    if (next == null) return;
    currentState.set(next);
  });
  const setValue = (next) => {
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-pin-inputs', className) },
    Array.from({ length }).map((_, idx) =>
      Input({
        className: 'g-ui-pin-input',
        type: 'text',
        inputMode: 'numeric',
        maxLength: 1,
        value: (currentState.get()?.[idx] || ''),
        onInput: (ev) => {
          const current = currentState.get() ?? [];
          const next = current.slice();
          next[idx] = ev.target.value;
          setValue(next);
        },
      })
    )
  );
}
