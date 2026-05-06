import { Div, Button, state, after, when } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, classVar } from '../utils.js';
import { forwardSvg, backwardSvg } from '../theme/icons.js';
import { ActionIcon } from './ActionIcon.js';
import { Icon } from './Icon.js';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const monthShortName = (monthIndex) =>
  new Date(2000, monthIndex, 1).toLocaleString(undefined, { month: 'short' });

export function Calendar(...args) {
  const { props, rawProps } = splitPropsChildren(args, { size: 'md' });
  const { value, className, size, ...rest } = props;
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
  const pickerMode = state(null);
  const yearScrollerNode = state(null);

  after(value).change((next) => {
    const resolved = resolveDate(next);
    if (resolved == null) return;
    currentState.set(resolved);
    viewState.set(new Date(resolved));
  });

  after(pickerMode).change((next) => {
    if (next !== 'year') return;
    queueMicrotask(() => {
      const root = yearScrollerNode.get();
      const active = root?.querySelector('.g-ui-calendar-picker-year-active');
      active?.scrollIntoView?.({ inline: 'center', block: 'nearest' });
    });
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

  const closePickers = () => pickerMode.set(null);

  const togglePicker = (which) => {
    pickerMode.set(pickerMode.get() === which ? null : which);
  };

  const shiftMonth = (delta) => {
    closePickers();
    const current = viewState.get();
    const next = createDate(current.getFullYear(), current.getMonth() + delta, current.getDate());
    viewState.set(next);
  };

  const monthLabel = after(viewState).compute(
    (current) => current.toLocaleString('default', { month: 'long' }),
    { keepAlive: true }
  );
  const yearLabel = after(viewState).compute((current) => String(current.getFullYear()), { keepAlive: true });

  const monthPickerOpen = after(pickerMode).compute((m) => m === 'month', { keepAlive: true });
  const yearPickerOpen = after(pickerMode).compute((m) => m === 'year', { keepAlive: true });

  const monthPickerPanel = after(viewState).compute((current) => {
    const y = current.getFullYear();
    const d = current.getDate();
    const mi = current.getMonth();
    return Div(
      { className: 'g-ui-calendar-picker-months' },
      ...Array.from({ length: 12 }, (_, i) =>
        Button(
          {
            type: 'button',
            className: cx('g-ui-calendar-picker-cell', i === mi && 'g-ui-calendar-picker-cell-active'),
            onClick: () => {
              viewState.set(createDate(y, i, d));
              pickerMode.set(null);
            },
          },
          monthShortName(i)
        )
      )
    );
  }, { keepAlive: true });

  const yearPickerPanel = after(viewState).compute((current) => {
    const ySel = current.getFullYear();
    const m = current.getMonth();
    const d = current.getDate();
    const cells = [];
    for (let y = ySel - 100; y <= ySel + 100; y += 1) {
      cells.push(
        Button(
          {
            type: 'button',
            className: cx(
              'g-ui-calendar-picker-cell',
              'g-ui-calendar-picker-year',
              y === ySel && 'g-ui-calendar-picker-year-active'
            ),
            onClick: () => {
              viewState.set(createDate(y, m, d));
              pickerMode.set(null);
            },
          },
          String(y)
        )
      );
    }
    return Div({ className: 'g-ui-calendar-picker-years', node: yearScrollerNode }, cells);
  }, { keepAlive: true });

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
  }, { keepAlive: true });

  return Div(
    { ...rest, className: cx('g-ui-calendar', className, classVar('g-ui-calendar-size-', size, 'md', { keepAlive: true })) },
    Div(
      { className: 'g-ui-calendar-header-block' },
      Div(
        { className: 'g-ui-calendar-header' },
        ActionIcon(
          { size: 'xs', variant: 'subtle', className: 'g-ui-calendar-nav', onClick: () => shiftMonth(-1) },
          Icon({ size: 'sm', className: 'g-ui-calendar-nav-icon', innerHTML: backwardSvg })
        ),
        Div(
          { className: 'g-ui-calendar-title-group' },
          Button(
            {
              type: 'button',
              className: 'g-ui-calendar-title-button',
              onClick: () => togglePicker('month'),
            },
            monthLabel
          ),
          Button(
            {
              type: 'button',
              className: 'g-ui-calendar-title-button',
              onClick: () => togglePicker('year'),
            },
            yearLabel
          )
        ),
        ActionIcon(
          { size: 'xs', variant: 'subtle', className: 'g-ui-calendar-nav', onClick: () => shiftMonth(1) },
          Icon({ size: 'sm', className: 'g-ui-calendar-nav-icon', innerHTML: forwardSvg })
        )
      ),
      when(monthPickerOpen, () => Div({ className: 'g-ui-calendar-picker' }, monthPickerPanel)),
      when(yearPickerOpen, () => Div({ className: 'g-ui-calendar-picker' }, yearPickerPanel))
    ),
    Div({ className: 'g-ui-calendar-grid' }, gridCells)
  );
}
