import { Button, Div, Span, state, after } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function Calendar(...args) {
  const { props, rawProps } = splitPropsChildren(args, {});
  const { value, className, ...rest } = props;
  const { onChange } = rawProps;
  const resolveDate = (next) => {
    const resolved = resolveValue(next);
    if (resolved instanceof Date) return resolved;
    if (resolved == null) return null;
    const parsed = new Date(resolved);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  };
  const currentState = state(resolveDate(value) ?? new Date());

  after(value).change((next) => {
    const resolved = resolveDate(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });

  const setDate = (day) => {
    const current = currentState.get();
    const next = new Date(current.getFullYear(), current.getMonth(), day);
    currentState.set(next);
    onChange?.(next);
  };

  const title = after(currentState).compute((current) => {
    const month = current.toLocaleString('default', { month: 'long' });
    return `${month} ${current.getFullYear()}`;
  });
  const gridCells = after(currentState).compute((current) => {
    const year = current.getFullYear();
    const month = current.getMonth();
    const first = new Date(year, month, 1);
    const start = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < start; i += 1) cells.push({ muted: true, label: '' });
    for (let d = 1; d <= daysInMonth; d += 1) cells.push({ label: d });
    return [
      ...weekDays.map((d) => Div({ className: 'g-ui-calendar-cell g-ui-calendar-cell-muted' }, d)),
      ...cells.map((c) =>
        Div(
          {
            className: cx(
              'g-ui-calendar-cell',
              c.muted && 'g-ui-calendar-cell-muted',
              c.label && c.label === current.getDate() && 'g-ui-calendar-cell-active'
            ),
            onClick: () => c.label && setDate(c.label),
          },
          c.label
        )
      ),
    ];
  });

  return Div(
    { ...rest, className: cx('g-ui-calendar', className) },
    Div(
      { className: 'g-ui-calendar-header' },
      Span({ className: 'g-ui-calendar-title' }, title),
      Button({ className: 'g-ui-button g-ui-button-size-xs g-ui-button-variant-subtle' }, '...')
    ),
    Div({ className: 'g-ui-calendar-grid' }, gridCells)
  );
}
