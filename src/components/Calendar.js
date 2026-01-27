import { Button, Div, state, after } from 'granular';
import { cx, splitPropsChildren, resolveValue } from '../utils.js';
import { forwardSvg, backwardSvg } from '../theme/icons.js';
import { ActionIcon } from './ActionIcon.js';
import { Icon } from './Icon.js';

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
  const viewState = state(new Date(currentState.get()));

  after(value).change((next) => {
    const resolved = resolveDate(next);
    if (resolved == null) return;
    currentState.set(resolved);
    viewState.set(new Date(resolved));
  });

  const createDate = (year, month, day) => {
    const maxDay = new Date(year, month + 1, 0).getDate();
    return new Date(year, month, Math.min(day, maxDay));
  };

  const setDate = (day) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear(), current.getMonth(), day);
    currentState.set(next);
    viewState.set(next);
    onChange?.(next);
  };

  const shiftMonth = (delta) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear(), current.getMonth() + delta, current.getDate());
    viewState.set(next);
  };

  const shiftYear = (delta) => {
    const current = viewState.get();
    const next = createDate(current.getFullYear() + delta, current.getMonth(), current.getDate());
    viewState.set(next);
  };

  const monthLabel = after(viewState).compute((current) => current.toLocaleString('default', { month: 'long' }));
  const yearLabel = after(viewState).compute((current) => String(current.getFullYear()));
  const gridCells = after(viewState, currentState).compute(([current, selected]) => {
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
              c.label &&
                selected.getFullYear() === year &&
                selected.getMonth() === month &&
                c.label === selected.getDate() &&
                'g-ui-calendar-cell-active'
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
      ActionIcon(
        { size: 'xs', variant: 'subtle', className: 'g-ui-calendar-nav', onClick: () => shiftMonth(-1) },
        Icon({ size: 'sm', className: 'g-ui-calendar-nav-icon', innerHTML: backwardSvg })
      ),
      Div(
        { className: 'g-ui-calendar-title-group' },
        Button({ type: 'button', className: 'g-ui-calendar-title-button', onClick: () => shiftMonth(1) }, monthLabel),
        Button({ type: 'button', className: 'g-ui-calendar-title-button', onClick: () => shiftYear(1) }, yearLabel)
      ),
      ActionIcon(
        { size: 'xs', variant: 'subtle', className: 'g-ui-calendar-nav', onClick: () => shiftMonth(1) },
        Icon({ size: 'sm', className: 'g-ui-calendar-nav-icon', innerHTML: forwardSvg })
      )
    ),
    Div({ className: 'g-ui-calendar-grid' }, gridCells)
  );
}
