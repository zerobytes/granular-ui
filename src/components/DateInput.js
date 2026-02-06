import { state, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';
import { Calendar } from './Calendar.js';
import { Popover } from './Popover.js';
import { TextInput } from './TextInput.js';

export function DateInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md', format: { pattern: 'dddd-dd-dd' } });
  const {
    value,
    size,
    calendarSize,
    leftSection,
    rightSection,
    className,
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
    if (value.get() == next) return;
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
    console.log('parsed', parsed);
    console.log('currentDate', currentDate.get());
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
      content: Calendar({ size: classVar('', calendarSize, 'xs'), value: currentDate, onChange: setDate }),
      className: 'g-ui-date-input-popover',
    },
    TextInput({
      ...rest,
      size,
      className: cx('g-ui-dateinput', className),
      leftSection,
      rightSection,
      type: 'text',
      inputMode: 'numeric',
      format: format,
      value: textValue,
      onChange: (next) => textValue.set(next),
    })
  );
}
