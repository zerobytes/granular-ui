import { Div, Input, Span, when, state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';
import { Calendar } from './Calendar.js';
import { Popover } from './Popover.js';

export function DateInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const {
    value,
    size,
    leftSection,
    rightSection,
    className,
    inputProps,
    format,
    minDate,
    maxDate,
    ...rest
  } = props;
  const { onChange } = rawProps;

  const resolveDate = (next) => {
    const resolved = resolveValue(next);
    if (resolved instanceof Date) return resolved;
    if (resolved == null || resolved === '') return null;
    const parsed = new Date(resolved);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  };
  const isSameDay = (left, right) =>
    left &&
    right &&
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate();
  const formatDate = (date) => {
    if (!date) return '';
    const year = String(date.getFullYear()).padStart(4, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const parseDate = (text) => {
    const digits = String(text ?? '').replace(/\D/g, '');
    if (digits.length < 8) return null;
    const year = Number(digits.slice(0, 4));
    const month = Number(digits.slice(4, 6));
    const day = Number(digits.slice(6, 8));
    if (!year || !month || !day) return null;
    const candidate = new Date(year, month - 1, day);
    if (
      candidate.getFullYear() !== year ||
      candidate.getMonth() !== month - 1 ||
      candidate.getDate() !== day
    ) {
      return null;
    }
    const min = resolveDate(minDate);
    if (min && candidate < min) return null;
    const max = resolveDate(maxDate);
    if (max && candidate > max) return null;
    return candidate;
  };

  const currentDate = state(resolveDate(value));
  const textValue = state(formatDate(currentDate.get()));
  const opened = state(false);

  after(value).change((next) => {
    const resolved = resolveDate(next);
    if (resolved == null) {
      currentDate.set(null);
      textValue.set('');
      return;
    }
    currentDate.set(resolved);
    textValue.set(formatDate(resolved));
  });

  after(textValue).change((next) => {
    const parsed = parseDate(next);
    if (!parsed) return;
    if (isSameDay(parsed, currentDate.get())) return;
    currentDate.set(parsed);
    onChange?.(parsed);
  });

  const setDate = (next) => {
    if (!next) return;
    if (isSameDay(next, currentDate.get())) return;
    currentDate.set(next);
    textValue.set(formatDate(next));
    onChange?.(next);
    opened.set(false);
  };

  return Popover(
    {
      opened,
      onChange: (next) => opened.set(!!next),
      content: Calendar({ value: currentDate, onChange: setDate }),
    },
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
      when(leftSection, () => Span({ className: 'g-ui-input-section' }, leftSection)),
      Input({
        type: 'text',
        inputMode: 'numeric',
        format: format ?? { pattern: 'dddd-dd-dd' },
        value: textValue,
        ...rest,
        className: cx('g-ui-input', inputProps?.className),
        onInput: (ev) => {
          inputProps?.onInput?.(ev);
        },
      }),
      when(rightSection, () => Span({ className: 'g-ui-input-section' }, rightSection))
    )
  );
}
