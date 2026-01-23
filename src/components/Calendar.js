import { Button, Div, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function Calendar(...args) {
  const { props } = splitPropsChildren(args);
  const { value, onChange, className, ...rest } = props;
  const current = value?.get ? value.get() : value;
  const date = current instanceof Date ? current : new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const start = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < start; i += 1) cells.push({ muted: true, label: '' });
  for (let d = 1; d <= daysInMonth; d += 1) cells.push({ label: d });

  const setDate = (d) => {
    const next = new Date(year, month, d);
    if (value?.set) value.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-calendar', className) },
    Div(
      { className: 'g-ui-calendar-header' },
      Span({ className: 'g-ui-calendar-title' }, `${date.toLocaleString('default', { month: 'long' })} ${year}`),
      Button({ className: 'g-ui-button g-ui-button-size-xs g-ui-button-variant-subtle' }, '...')
    ),
    Div(
      { className: 'g-ui-calendar-grid' },
      weekDays.map((d) => Div({ className: 'g-ui-calendar-cell g-ui-calendar-cell-muted' }, d)),
      cells.map((c) =>
        Div(
          {
            className: cx(
              'g-ui-calendar-cell',
              c.muted && 'g-ui-calendar-cell-muted',
              c.label === date.getDate() && 'g-ui-calendar-cell-active'
            ),
            onClick: () => c.label && setDate(c.label),
          },
          c.label
        )
      )
    )
  );
}
