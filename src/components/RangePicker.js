import { Div, Input, state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function RangePicker(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { value, size = 'md', className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value) ?? ['', '']);

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });

  const setValue = (next) => {
    if (value?.set) value.set(next);
    currentState.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-range-picker', props.className ?? className) },
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      Input({
        type: 'text',
        inputMode: 'numeric',
        className: 'g-ui-input',
        value: after(currentState).compute((current) => current?.[0] ?? ''),
        onInput: (ev) => {
          const current = currentState.get() ?? ['', ''];
          setValue([ev.target.value, current[1]]);
        },
      })
    ),
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      Input({
        type: 'text',
        inputMode: 'numeric',
        className: 'g-ui-input',
        value: after(currentState).compute((current) => current?.[1] ?? ''),
        onInput: (ev) => {
          const current = currentState.get() ?? ['', ''];
          setValue([current[0], ev.target.value]);
        },
      })
    )
  );
}
