import { Div, state, after } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';
import { TextInput } from './TextInput.js';

export function RangePicker(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { value, size, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value) ?? ['', '']);

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
    { ...rest, className: cx('g-ui-range-picker', props.className ?? className) },
    TextInput({
      size,
      type: 'text',
      inputMode: 'numeric',
      value: after(currentState).compute((current) => current?.[0] ?? ''),
      onInput: (ev) => {
        const current = currentState.get() ?? ['', ''];
        setValue([ev.target.value, current[1]]);
      },
    }),
    TextInput({
      size,
      type: 'text',
      inputMode: 'numeric',
      value: after(currentState).compute((current) => current?.[1] ?? ''),
      onInput: (ev) => {
        const current = currentState.get() ?? ['', ''];
        setValue([current[0], ev.target.value]);
      },
    })
  );
}
