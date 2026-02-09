import {
  Div,
  Button,
  state,
  after,
  when,
  portal,
  Input,
  Label,
  Span,
} from 'granular';
import { cx, splitPropsChildren, resolveValue, classVar } from '../utils.js';
import { Modal } from './Modal.js';
import { ActionIcon } from './ActionIcon.js';
import { Icon } from './Icon.js';
import { TextInput } from './TextInput.js';
import { Textarea } from './Textarea.js';
import { Checkbox } from './Checkbox.js';
import {
  forwardSvg,
  backwardSvg,
  closeSvg,
  plusSvg,
  editSvg,
  deleteSvg,
  calendarTodaySvg,
} from '../theme/icons.js';

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const VIEW_OPTIONS = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

function toDate(v) {
  if (v instanceof Date) return v;
  if (v == null) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

function normalizeEvent(ev) {
  const start = toDate(ev.start);
  const end = toDate(ev.end);
  if (!start || !end) return null;
  return {
    ...ev,
    id: ev.id ?? `${start.getTime()}-${ev.title ?? 'event'}`,
    title: ev.title ?? '',
    start,
    end,
    allDay: !!ev.allDay,
    description: ev.description ?? '',
    location: ev.location ?? '',
    attendees: Array.isArray(ev.attendees) ? ev.attendees : [],
    color: ev.color ?? null,
  };
}

function getEventsInRange(events, rangeStart, rangeEnd) {
  const start = toDate(rangeStart).getTime();
  const end = toDate(rangeEnd).getTime();
  return events
    .map(normalizeEvent)
    .filter(Boolean)
    .filter((ev) => ev.end.getTime() > start && ev.start.getTime() < end);
}

function getEventsForDay(events, day) {
  const d = new Date(day);
  d.setHours(0, 0, 0, 0);
  const start = d.getTime();
  d.setHours(23, 59, 59, 999);
  const end = d.getTime();
  return getEventsInRange(events, start, end);
}

function weekStart(date, firstDayOfWeek) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day - firstDayOfWeek + 7) % 7;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatTime(date, locale = 'default') {
  return date.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit', hour12: true });
}

function formatDate(date, locale = 'default') {
  return date.toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric' });
}

function formatMonthYear(date, locale = 'default') {
  return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
}

function formatWeekRange(weekStartDate, locale = 'default') {
  const end = new Date(weekStartDate);
  end.setDate(end.getDate() + 6);
  return `${weekStartDate.toLocaleDateString(locale, { month: 'short', day: 'numeric' })} – ${end.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })}`;
}

function timeToPct(date, dayStart, dayEnd) {
  const d = new Date(date);
  const start = new Date(d);
  start.setHours(dayStart, 0, 0, 0);
  const end = new Date(d);
  end.setHours(dayEnd, 0, 0, 0);
  const total = (dayEnd - dayStart) * 60;
  const mins = (d.getTime() - start.getTime()) / 60000;
  return Math.max(0, Math.min(1, mins / total)) * 100;
}

function durationPct(start, end, dayStart, dayEnd) {
  const dayStartMs = new Date(start).setHours(dayStart, 0, 0, 0);
  const dayEndMs = new Date(start).setHours(dayEnd, 0, 0, 0);
  const total = (dayEnd - dayStart) * 60;
  const s = Math.max(start.getTime(), dayStartMs);
  const e = Math.min(end.getTime(), dayEndMs);
  const mins = (e - s) / 60000;
  const top = ((s - dayStartMs) / 60000 / total) * 100;
  const height = (mins / total) * 100;
  return { top, height };
}

export function EventCalendar(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    defaultView: 'month',
    firstDayOfWeek: 0,
    locale: 'default',
    hourSlotDuration: 30,
    minTime: 6,
    maxTime: 22,
    eventCreationColorOptions: [],
  });
  const {
    events: eventsProp = [],
    defaultView,
    firstDayOfWeek,
    locale,
    hourSlotDuration,
    minTime,
    maxTime,
    eventCreationColorOptions,
    className,
    ...rest
  } = props;
  const {
    onCreateEventRequest,
    onViewEventRequest,
    onUpdateEventRequest,
    onRemoveEventRequest,
    eventCreationEmailLookup,
    eventCreationLocationsCallback,
    eventCreationCalendarsCallback,
    onSlotClick,
    onDateRangeChange,
  } = rawProps;

  const viewMode = state(resolveValue(defaultView) ?? 'month');
  const currentDate = state(new Date());
  const modalState = state(null);
  const selectedEvent = state(null);
  const createDraft = state({
    title: '',
    start: null,
    end: null,
    allDay: false,
    description: '',
    location: '',
    attendees: [],
    color: null,
  });

  const eventsList = after(eventsProp).compute((v) => (Array.isArray(v) ? v : []));
  const viewDate = currentDate.get();
  const weekStartDate = weekStart(viewDate, resolveValue(firstDayOfWeek) ?? 0);
  const dayStart = resolveValue(minTime) ?? 6;
  const dayEnd = resolveValue(maxTime) ?? 22;
  const slotDuration = resolveValue(hourSlotDuration) ?? 30;

  const goPrev = () => {
    const d = new Date(currentDate.get());
    if (viewMode.get() === 'month') d.setMonth(d.getMonth() - 1);
    else if (viewMode.get() === 'week') d.setDate(d.getDate() - 7);
    else d.setDate(d.getDate() - 1);
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };

  const goNext = () => {
    const d = new Date(currentDate.get());
    if (viewMode.get() === 'month') d.setMonth(d.getMonth() + 1);
    else if (viewMode.get() === 'week') d.setDate(d.getDate() + 7);
    else d.setDate(d.getDate() + 1);
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };

  const goToday = () => {
    const d = new Date();
    currentDate.set(d);
    onDateRangeChange?.({ start: d, end: d, view: viewMode.get() });
  };

  const openCreateModal = (start, end, allDay = false) => {
    const s = start ? new Date(start) : new Date(currentDate.get());
    const e = end ? new Date(end) : new Date(s.getTime() + 60 * 60 * 1000);
    if (allDay) {
      s.setHours(0, 0, 0, 0);
      e.setHours(23, 59, 59, 999);
    }
    createDraft.set({
      title: '',
      start: s,
      end: e,
      allDay,
      description: '',
      location: '',
      attendees: [],
      color: null,
    });
    modalState.set('create');
  };

  const openViewModal = (event) => {
    selectedEvent.set(normalizeEvent(event));
    modalState.set('view');
    onViewEventRequest?.(event);
  };

  const openEditModal = () => {
    const ev = selectedEvent.get();
    if (!ev) return;
    createDraft.set({
      title: ev.title,
      start: new Date(ev.start),
      end: new Date(ev.end),
      allDay: ev.allDay,
      description: ev.description ?? '',
      location: ev.location ?? '',
      attendees: [...(ev.attendees || [])],
      color: ev.color ?? null,
    });
    modalState.set('edit');
  };

  const closeModal = () => {
    modalState.set(null);
    selectedEvent.set(null);
  };

  const handleSlotClick = (date, hour, allDay) => {
    if (onSlotClick) {
      onSlotClick({ date, hour, allDay });
      return;
    }
    const start = new Date(date);
    if (allDay) {
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setHours(23, 59, 59, 999);
      openCreateModal(start, end, true);
    } else {
      start.setHours(hour, 0, 0, 0);
      const end = new Date(start.getTime() + slotDuration * 60 * 1000);
      openCreateModal(start, end, false);
    }
  };

  const handleCreateSubmit = () => {
    const draft = createDraft.get();
    if (!draft.start || !draft.end) return;
    onCreateEventRequest?.(
      {
        title: draft.title,
        start: draft.start,
        end: draft.end,
        allDay: draft.allDay,
        description: draft.description,
        location: draft.location,
        attendees: draft.attendees,
        color: draft.color,
      },
      () => {
        closeModal();
      }
    );
  };

  const handleUpdateSubmit = () => {
    const ev = selectedEvent.get();
    const draft = createDraft.get();
    if (!ev || !draft.start || !draft.end) return;
    onUpdateEventRequest?.(
      ev,
      {
        title: draft.title,
        start: draft.start,
        end: draft.end,
        allDay: draft.allDay,
        description: draft.description,
        location: draft.location,
        attendees: draft.attendees,
        color: draft.color,
      },
      () => closeModal()
    );
  };

  const handleRemoveRequest = () => {
    const ev = selectedEvent.get();
    if (!ev) return;
    onRemoveEventRequest?.(ev, () => closeModal());
  };

  const titleLabel = after(viewMode, currentDate).compute(([view, date]) => {
    if (view === 'month') return formatMonthYear(date, resolveValue(locale));
    if (view === 'week') return formatWeekRange(weekStart(date, resolveValue(firstDayOfWeek) ?? 0), resolveValue(locale));
    return formatDate(date, resolveValue(locale));
  });

  const header = Div(
    { className: 'g-ui-event-calendar-header' },
    Div(
      { className: 'g-ui-event-calendar-nav-group' },
      ActionIcon(
        { size: 'sm', variant: 'subtle', onClick: goPrev, className: 'g-ui-event-calendar-nav' },
        Icon({ size: 'sm', innerHTML: backwardSvg })
      ),
      ActionIcon(
        { size: 'sm', variant: 'subtle', onClick: goNext, className: 'g-ui-event-calendar-nav' },
        Icon({ size: 'sm', innerHTML: forwardSvg })
      ),
      Button(
        { type: 'button', variant: 'subtle', size: 'sm', className: 'g-ui-event-calendar-today', onClick: goToday },
        Icon({ size: 'sm', className: 'g-ui-event-calendar-today-icon', innerHTML: calendarTodaySvg }),
        'Today'
      )
    ),
    Div({ className: 'g-ui-event-calendar-title' }, titleLabel),
    Div(
      { className: 'g-ui-event-calendar-actions' },
      VIEW_OPTIONS.map((opt) =>
        Div(
          {
            className: cx(
              'g-ui-event-calendar-view-option',
              after(viewMode).compute((v) => (v === opt.value ? 'g-ui-event-calendar-view-option-active' : ''))
            ),
            onClick: () => {
              viewMode.set(opt.value);
              onDateRangeChange?.({ start: currentDate.get(), end: currentDate.get(), view: opt.value });
            },
          },
          opt.label
        )
      ),
      Button(
        {
          type: 'button',
          variant: 'filled',
          size: 'sm',
          className: 'g-ui-event-calendar-create-btn',
          onClick: () => openCreateModal(currentDate.get(), null, false),
        },
        Icon({ size: 'sm', innerHTML: plusSvg }),
        'Create'
      )
    )
  );

  const monthGrid = after(currentDate, eventsList, firstDayOfWeek).compute(([date, events, firstDay]) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const first = new Date(year, month, 1);
    const startDow = (first.getDay() - (firstDay ?? 0) + 7) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const rows = [];
    let dayCount = 1;
    let nextMonthDay = 1;
    const totalCells = Math.ceil((startDow + daysInMonth) / 7) * 7;
    const dayCells = [];
    for (let i = 0; i < totalCells; i += 1) {
      let day;
      let isCurrentMonth;
      let dateObj;
      if (i < startDow) {
        day = prevMonthDays - startDow + i + 1;
        dateObj = new Date(year, month - 1, day);
        isCurrentMonth = false;
      } else if (dayCount <= daysInMonth) {
        day = dayCount;
        dateObj = new Date(year, month, day);
        isCurrentMonth = true;
        dayCount += 1;
      } else {
        day = nextMonthDay;
        dateObj = new Date(year, month + 1, day);
        isCurrentMonth = false;
        nextMonthDay += 1;
      }
      const dayEvents = getEventsForDay(events, dateObj);
      const isToday =
        dateObj.getDate() === new Date().getDate() &&
        dateObj.getMonth() === new Date().getMonth() &&
        dateObj.getFullYear() === new Date().getFullYear();
      dayCells.push(
        Div(
          {
            key: dateObj.getTime(),
            className: cx(
              'g-ui-event-calendar-month-cell',
              !isCurrentMonth && 'g-ui-event-calendar-month-cell-outside',
              isToday && 'g-ui-event-calendar-month-cell-today'
            ),
          },
          Div(
            {
              className: 'g-ui-event-calendar-month-cell-header',
              onClick: () => handleSlotClick(dateObj, 0, true),
            },
            Span({ className: 'g-ui-event-calendar-month-cell-day' }, dateObj.getDate())
          ),
          Div(
            { className: 'g-ui-event-calendar-month-cell-events' },
            dayEvents.slice(0, 3).map((ev) =>
              Div(
                {
                  key: ev.id,
                  className: 'g-ui-event-calendar-month-event',
                  style: ev.color ? { borderLeftColor: ev.color, backgroundColor: `${ev.color}20` } : {},
                  onClick: (e) => {
                    e.stopPropagation();
                    openViewModal(ev);
                  },
                },
                ev.title || '(No title)'
              )
            ),
            when(dayEvents.length > 3, () =>
              Div(
                {
                  className: 'g-ui-event-calendar-month-more',
                  onClick: (e) => {
                    e.stopPropagation();
                    openViewModal(dayEvents[3]);
                  },
                },
                `+${dayEvents.length - 3} more`
              )
            )
          )
        )
      );
    }
    return dayCells;
  });

  const monthView = Div(
    { className: 'g-ui-event-calendar-month' },
    Div(
      { className: 'g-ui-event-calendar-weekdays' },
      WEEKDAY_LABELS.map((label) => Div({ key: label, className: 'g-ui-event-calendar-weekday' }, label))
    ),
    Div({ className: 'g-ui-event-calendar-month-grid' }, monthGrid)
  );

  const timeSlots = [];
  for (let h = dayStart; h < dayEnd; h += 1) {
    for (let s = 0; s < 60; s += slotDuration) {
      timeSlots.push(h + s / 60);
    }
  }

  const weekDays = after(currentDate, firstDayOfWeek).compute(([date, firstDay]) => {
    const start = weekStart(date, firstDay ?? 0);
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  });

  const weekView = Div(
    { className: 'g-ui-event-calendar-week' },
    after(weekDays).compute((days) =>
      Div(
        { className: 'g-ui-event-calendar-week-days' },
        Div({ className: 'g-ui-event-calendar-week-time-col' }, ''),
        (days || []).map((d) =>
          Div(
            { key: d.getTime(), className: 'g-ui-event-calendar-week-day-col' },
            Div({ className: 'g-ui-event-calendar-week-day-header' }, formatDate(d, resolveValue(locale)))
          )
        )
      )
    ),
    Div({ className: 'g-ui-event-calendar-week-body' },
      Div(
        { className: 'g-ui-event-calendar-week-time-col' },
        timeSlots.map((h) => {
          const hour = Math.floor(h);
          const min = (h - hour) * 60;
          const label = `${hour <= 12 ? hour : hour - 12}:${min === 0 ? '00' : min} ${hour < 12 ? 'AM' : 'PM'}`;
          return Div({ key: h, className: 'g-ui-event-calendar-week-slot-label' }, label);
        })
      ),
      after(weekDays, eventsList).compute(([days, events]) => {
        if (!days || !days.length) return null;
        const rangeStart = days[0];
        const rangeEnd = new Date(days[6]);
        rangeEnd.setHours(23, 59, 59, 999);
        const inRange = getEventsInRange(events, rangeStart, rangeEnd);
        return Div(
          { className: 'g-ui-event-calendar-week-grid-cols' },
          days.map((day) =>
            Div(
              { key: day.getTime(), className: 'g-ui-event-calendar-week-day-col g-ui-event-calendar-week-day-col-body' },
              timeSlots.map((h) =>
                Div({
                  key: h,
                  className: 'g-ui-event-calendar-week-slot',
                  onClick: () => handleSlotClick(day, h, false),
                })
              ),
              inRange
                .filter(
                  (ev) =>
                    !ev.allDay &&
                    ev.start.getDate() === day.getDate() &&
                    ev.start.getMonth() === day.getMonth() &&
                    ev.start.getFullYear() === day.getFullYear()
                )
                .map((ev) => {
                  const { top, height } = durationPct(ev.start, ev.end, dayStart, dayEnd);
                  return Div(
                    {
                      key: ev.id,
                      className: 'g-ui-event-calendar-week-event',
                      style: {
                        top: `${top}%`,
                        height: `${height}%`,
                        borderLeftColor: ev.color || 'var(--g-ui-primary)',
                      },
                      onClick: (e) => {
                        e.stopPropagation();
                        openViewModal(ev);
                      },
                    },
                    Div({ className: 'g-ui-event-calendar-week-event-title' }, ev.title || '(No title)'),
                    when(!ev.allDay, () =>
                      Span({ className: 'g-ui-event-calendar-week-event-time' }, `${formatTime(ev.start, resolveValue(locale))} – ${formatTime(ev.end, resolveValue(locale))}`)
                    )
                  );
                })
            )
          )
        );
      })
    )
  );

  const dayView = Div(
    { className: 'g-ui-event-calendar-day' },
    Div(
      { className: 'g-ui-event-calendar-day-body' },
      Div(
        { className: 'g-ui-event-calendar-day-time-col' },
        timeSlots.map((h) => {
          const hour = Math.floor(h);
          const min = (h - hour) * 60;
          const label = `${hour <= 12 ? hour : hour - 12}:${min === 0 ? '00' : min} ${hour < 12 ? 'AM' : 'PM'}`;
          return Div({ key: h, className: 'g-ui-event-calendar-day-slot-label' }, label);
        })
      ),
      Div(
        { className: 'g-ui-event-calendar-day-slots' },
        timeSlots.map((h) =>
          Div({
            key: h,
            className: 'g-ui-event-calendar-day-slot',
            onClick: () => handleSlotClick(currentDate.get(), h, false),
          })
        ),
        after(eventsList, currentDate).compute(([events, day]) => {
          if (!day) return [];
          const dayEvs = getEventsForDay(events, day).filter((e) => !e.allDay);
          return dayEvs.map((ev) => {
            const { top, height } = durationPct(ev.start, ev.end, dayStart, dayEnd);
            return Div(
              {
                key: ev.id,
                className: 'g-ui-event-calendar-day-event',
                style: {
                  top: `${top}%`,
                  height: `${height}%`,
                  borderLeftColor: ev.color || 'var(--g-ui-primary)',
                },
                onClick: (e) => {
                  e.stopPropagation();
                  openViewModal(ev);
                },
              },
              Div({ className: 'g-ui-event-calendar-day-event-title' }, ev.title || '(No title)'),
              Span({ className: 'g-ui-event-calendar-day-event-time' }, `${formatTime(ev.start, resolveValue(locale))} – ${formatTime(ev.end, resolveValue(locale))}`)
            );
          });
        })
      )
    )
  );

  const createEditForm = (isEdit) => {
    const draft = createDraft.get();
    const today = new Date();
    const defaultStart = draft.start || today;
    const defaultEnd = draft.end || new Date(today.getTime() + 60 * 60 * 1000);
    const titleState = state(draft.title);
    const startDateState = state(defaultStart.toISOString().slice(0, 10));
    const startTimeState = state(
      !draft.allDay && defaultStart ? defaultStart.toTimeString().slice(0, 5) : '09:00'
    );
    const endDateState = state(defaultEnd.toISOString().slice(0, 10));
    const endTimeState = state(
      !draft.allDay && defaultEnd ? defaultEnd.toTimeString().slice(0, 5) : '10:00'
    );
    const allDayState = state(draft.allDay);
    const descState = state(draft.description);
    const locationState = state(draft.location);
    const attendeesState = state(draft.attendees || []);
    const emailLookupQuery = state('');
    const emailLookupResults = state([]);
    const locationOptions = state([]);
    const locationQuery = state('');
    const colorOptions = Array.isArray(eventCreationColorOptions) ? eventCreationColorOptions : [];
    const colorState = state(draft.color);

    const applyDraft = () => {
      const start = new Date(startDateState.get() + 'T' + (allDayState.get() ? '00:00:00' : startTimeState.get() + ':00'));
      const end = new Date(endDateState.get() + 'T' + (allDayState.get() ? '23:59:59' : endTimeState.get() + ':00'));
      createDraft.set({
        title: titleState.get(),
        start,
        end,
        allDay: allDayState.get(),
        description: descState.get(),
        location: locationState.get(),
        attendees: attendeesState.get(),
        color: colorState.get(),
      });
    };

    const doEmailLookup = (query) => {
      emailLookupQuery.set(query);
      if (!eventCreationEmailLookup || !query.trim()) {
        emailLookupResults.set([]);
        return;
      }
      Promise.resolve(eventCreationEmailLookup(query.trim()))
        .then((list) => emailLookupResults.set(Array.isArray(list) ? list : []))
        .catch(() => emailLookupResults.set([]));
    };

    const addAttendee = (item) => {
      const current = attendeesState.get();
      if (current.some((a) => (a.email || a.id) === (item.email || item.id))) return;
      attendeesState.set([...current, { id: item.id, email: item.email ?? item.label, label: item.label }]);
      emailLookupQuery.set('');
      emailLookupResults.set([]);
    };

    const removeAttendee = (index) => {
      const next = [...attendeesState.get()];
      next.splice(index, 1);
      attendeesState.set(next);
    };

    const loadLocations = () => {
      if (!eventCreationLocationsCallback) return;
      Promise.resolve(eventCreationLocationsCallback(locationQuery.get()))
        .then((list) => locationOptions.set(Array.isArray(list) ? list : []))
        .catch(() => locationOptions.set([]));
    };

    return Div(
      { className: 'g-ui-event-calendar-form' },
      Div(
        { className: 'g-ui-event-calendar-form-row' },
        TextInput({
          label: 'Title',
          placeholder: 'Event title',
          value: titleState,
          onInput: (ev) => titleState.set(ev?.target?.value ?? ''),
        })
      ),
      Div(
        { className: 'g-ui-event-calendar-form-row g-ui-event-calendar-form-row-inline' },
        Checkbox({
          label: 'All day',
          checked: allDayState,
          onChange: (v) => allDayState.set(v),
        })
      ),
      Div(
        { className: 'g-ui-event-calendar-form-row g-ui-event-calendar-form-row-inline' },
        Div({ className: 'g-ui-event-calendar-form-field' },
          Label({ className: 'g-ui-event-calendar-form-label' }, 'Start'),
          Input({
            type: 'date',
            className: 'g-ui-input g-ui-input-size-md',
            value: startDateState,
            onInput: (ev) => startDateState.set(ev?.target?.value ?? ''),
          }),
          when(!allDayState, () =>
            Input({
              type: 'time',
              className: 'g-ui-input g-ui-input-size-md',
              value: startTimeState,
              onInput: (ev) => startTimeState.set(ev?.target?.value ?? ''),
            })
          )
        ),
        Div({ className: 'g-ui-event-calendar-form-field' },
          Label({ className: 'g-ui-event-calendar-form-label' }, 'End'),
          Input({
            type: 'date',
            className: 'g-ui-input g-ui-input-size-md',
            value: endDateState,
            onInput: (ev) => endDateState.set(ev?.target?.value ?? ''),
          }),
          when(!allDayState, () =>
            Input({
              type: 'time',
              className: 'g-ui-input g-ui-input-size-md',
              value: endTimeState,
              onInput: (ev) => endTimeState.set(ev?.target?.value ?? ''),
            })
          )
        )
      ),
      when(eventCreationLocationsCallback, () =>
        Div(
          { className: 'g-ui-event-calendar-form-row' },
          Label({ className: 'g-ui-event-calendar-form-label' }, 'Location'),
          TextInput({
            placeholder: 'Search or type location',
            value: locationQuery,
            onInput: (ev) => {
              locationQuery.set(ev?.target?.value ?? '');
              loadLocations();
            },
            onFocus: loadLocations,
          }),
          when(after(locationOptions).compute((o) => o && o.length > 0), () =>
            Div(
              { className: 'g-ui-event-calendar-form-suggestions' },
              locationOptions.get().map((loc) =>
                Div(
                  {
                    key: loc.id ?? loc.label,
                    className: 'g-ui-event-calendar-form-suggestion-item',
                    onClick: () => {
                      locationState.set(loc.label ?? loc.id);
                      locationQuery.set('');
                      locationOptions.set([]);
                    },
                  },
                  loc.label ?? loc.id
                )
              )
            )
          ),
          when(after(locationState).compute((v) => !!v), () =>
            Span({ className: 'g-ui-event-calendar-form-chip' }, locationState)
          )
        )
      ),
      when(eventCreationEmailLookup, () =>
        Div(
          { className: 'g-ui-event-calendar-form-row' },
          Label({ className: 'g-ui-event-calendar-form-label' }, 'Add guests'),
          TextInput({
            placeholder: 'Type email to search',
            value: emailLookupQuery,
            onInput: (ev) => doEmailLookup(ev?.target?.value ?? ''),
          }),
          Div(
            { className: 'g-ui-event-calendar-form-chips' },
            attendeesState.get().map((a, i) =>
              Span(
                {
                  key: (a.email || a.id) + i,
                  className: 'g-ui-event-calendar-form-chip g-ui-event-calendar-form-chip-removable',
                  onClick: () => removeAttendee(i),
                },
                a.label || a.email || a.id,
                ' ×'
              )
            )
          ),
          when(after(emailLookupResults).compute((r) => r && r.length > 0), () =>
            Div(
              { className: 'g-ui-event-calendar-form-suggestions' },
              emailLookupResults.get().map((item) =>
                Div(
                  {
                    key: item.id ?? item.email,
                    className: 'g-ui-event-calendar-form-suggestion-item',
                    onClick: () => addAttendee(item),
                  },
                  item.label ?? item.email ?? item.id
                )
              )
            )
          )
        )
      ),
      Div(
        { className: 'g-ui-event-calendar-form-row' },
        Textarea({
          label: 'Description',
          placeholder: 'Add description',
          value: descState,
          onInput: (ev) => descState.set(ev?.target?.value ?? ''),
        })
      ),
      when(colorOptions.length > 0, () =>
        Div(
          { className: 'g-ui-event-calendar-form-row' },
          Label({ className: 'g-ui-event-calendar-form-label' }, 'Color'),
          Div(
            { className: 'g-ui-event-calendar-form-colors' },
            colorOptions.map((opt) =>
              Div(
                {
                  key: opt.value ?? opt.id ?? opt,
                  className: cx(
                    'g-ui-event-calendar-form-color-swatch',
                    after(colorState).compute((c) => (c === (opt.value ?? opt.id ?? opt) ? 'g-ui-event-calendar-form-color-swatch-active' : ''))
                  ),
                  style: { backgroundColor: opt.color ?? opt.value ?? opt },
                  onClick: () => colorState.set(opt.value ?? opt.id ?? opt),
                }
              )
            )
          )
        )
      ),
      Div(
        { className: 'g-ui-event-calendar-form-actions' },
        Button({ variant: 'subtle', onClick: closeModal }, 'Cancel'),
        Button(
          {
            variant: 'filled',
            onClick: () => {
              applyDraft();
              if (isEdit) handleUpdateSubmit();
              else handleCreateSubmit();
            },
          },
          isEdit ? 'Save' : 'Create'
        )
      )
    );
  };

  const viewModalContent = () => {
    const ev = selectedEvent.get();
    if (!ev) return null;
    return Div(
      { className: 'g-ui-event-calendar-view-modal' },
      Div({ className: 'g-ui-event-calendar-view-modal-title' }, ev.title || '(No title)'),
      Div(
        { className: 'g-ui-event-calendar-view-modal-meta' },
        ev.allDay
          ? Span({ className: 'g-ui-event-calendar-view-modal-date' }, formatDate(ev.start, resolveValue(locale)) + (ev.start.getTime() !== ev.end.getTime() ? ` – ${formatDate(ev.end, resolveValue(locale))}` : ''))
          : Span(
              { className: 'g-ui-event-calendar-view-modal-date' },
              `${formatDate(ev.start, resolveValue(locale))} · ${formatTime(ev.start, resolveValue(locale))} – ${formatTime(ev.end, resolveValue(locale))}`
            )
      ),
      when(ev.location, () => Div({ className: 'g-ui-event-calendar-view-modal-field' }, 'Location: ', ev.location)),
      when(ev.description, () => Div({ className: 'g-ui-event-calendar-view-modal-field' }, ev.description)),
      when(ev.attendees?.length, () =>
        Div(
          { className: 'g-ui-event-calendar-view-modal-field' },
          'Guests: ',
          ev.attendees.map((a) => a.label || a.email || a.id).join(', ')
        )
      ),
      Div(
        { className: 'g-ui-event-calendar-view-modal-actions' },
        Button({ variant: 'subtle', size: 'sm', onClick: openEditModal }, Icon({ size: 'sm', innerHTML: editSvg }), ' Edit'),
        Button(
          { variant: 'subtle', size: 'sm', onClick: handleRemoveRequest, className: 'g-ui-event-calendar-view-modal-delete' },
          Icon({ size: 'sm', innerHTML: deleteSvg }),
          ' Delete'
        ),
        Button({ variant: 'filled', size: 'sm', onClick: closeModal }, 'Close')
      )
    );
  };

  return Div(
    { ...rest, className: cx('g-ui-event-calendar', className) },
    header,
    when(
      viewMode,
      (v) => v === 'month',
      () => monthView
    ),
    when(
      viewMode,
      (v) => v === 'week',
      () => weekView
    ),
    when(
      viewMode,
      (v) => v === 'day',
      () => dayView
    ),
    when(
      modalState,
      (m) => m === 'create',
      () =>
        Modal(
          {
            opened: true,
            title: 'New event',
            size: 'lg',
            onClose: closeModal,
          },
          createEditForm(false)
        )
    ),
    when(
      modalState,
      (m) => m === 'view',
      () =>
        Modal(
          {
            opened: true,
            title: 'Event',
            size: 'md',
            onClose: closeModal,
          },
          viewModalContent()
        )
    ),
    when(
      modalState,
      (m) => m === 'edit',
      () =>
        Modal(
          {
            opened: true,
            title: 'Edit event',
            size: 'lg',
            onClose: closeModal,
          },
          createEditForm(true)
        )
    )
  );
}
