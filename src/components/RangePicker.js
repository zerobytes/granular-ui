import { Div, Span, state, after } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';
import { DateInput } from './DateInput.js';

function resolveDate(v) {
  const resolved = resolveValue(v);
  if (resolved instanceof Date) return resolved;
  if (resolved == null || resolved === '') return null;
  const d = new Date(resolved);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toDatePair(value) {
  const raw = resolveValue(value);
  if (raw == null) return [null, null];
  const arr = Array.isArray(raw) ? raw : [raw];
  return [resolveDate(arr[0]), resolveDate(arr[1])];
}

function isSameDay(a, b) {
  if (!a || !b) return a === b;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function RangePicker(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { value, size, minDate, maxDate, className, placeholderMin, placeholderMax, ...rest } = props;
  const { onChange } = rawProps;

  const [initialStart, initialEnd] = toDatePair(value);
  const startState = state(initialStart);
  const endState = state(initialEnd);

  after(value).change((next) => {
    const [s, e] = toDatePair(next);
    if (isSameDay(s, startState.get()) && isSameDay(e, endState.get())) return;
    startState.set(s);
    endState.set(e);
  });

  const notify = () => {
    const s = startState.get();
    const e = endState.get();
    onChange?.([s ?? null, e ?? null]);
  };

  const setStart = (date) => {
    const end = endState.get();
    if (date && end && date > end) endState.set(date);
    startState.set(date);
    notify();
  };

  const setEnd = (date) => {
    const start = startState.get();
    if (date && start && date < start) startState.set(date);
    endState.set(date);
    notify();
  };

  return Div(
    { ...rest, className: cx('g-ui-range-picker', props.className ?? className) },
    DateInput({
      ...rest,
      size,
      value: startState,
      onChange: setStart,
      maxDate: endState,
      placeholder: resolveValue(placeholderMin) ?? undefined,
    }),
    Span({ className: 'g-ui-range-picker-separator' }, '–'),
    DateInput({
      ...rest,
      size,
      value: endState,
      onChange: setEnd,
      minDate: startState,
      placeholder: resolveValue(placeholderMax) ?? undefined,
    })
  );
}
