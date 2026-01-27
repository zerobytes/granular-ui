import { Div, after, state, when } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, resolveBool, resolveValue } from '../utils.js';
import { SliderMark } from './Slider.js';

export function RangeSlider(...args) {
  const { props, rawProps } = splitPropsChildren(args, { min: 0, max: 100, step: 1, size: 'md' });
  const { value, marks, min, max, step, size, disabled, className, ...rest } = props;
  const { onChange } = rawProps;
  const currentState = state(resolveValue(value ?? [min, max]));
  const getBounds = () => {
    const minValue = Number(resolveValue(min));
    const maxValue = Number(resolveValue(max));
    if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) {
      return { minValue: 0, maxValue: 100 };
    }
    return { minValue: Math.min(minValue, maxValue), maxValue: Math.max(minValue, maxValue) };
  };
  const getStep = () => {
    const stepValue = Number(resolveValue(step));
    if (Number.isFinite(stepValue) && stepValue > 0) return stepValue;
    return 1;
  };
  const normalize = (vals) => {
    const { minValue, maxValue } = getBounds();
    const stepValue = getStep();
    let list = [minValue, maxValue];
    if (Array.isArray(vals)) list = vals;
    const first = Math.max(minValue, Math.min(maxValue, Number(list[0])));
    const second = Math.max(minValue, Math.min(maxValue, Number(list[1])));
    const low = Math.round(Math.min(first, second) / stepValue) * stepValue;
    const high = Math.round(Math.max(first, second) / stepValue) * stepValue;
    return [low, high];
  };
  after(value).change((next) => {
    if (next == null) return;
    currentState.set(normalize(next));
  });
  const setValue = (next) => {
    const normalized = normalize(next);
    if (
      normalized?.[0] === currentState.get()?.[0] &&
      normalized?.[1] === currentState.get()?.[1]
    ) {
      return;
    }
    currentState.set(normalized);
    onChange?.(normalized);
  };
  const percent = after(currentState).compute((vals) => {
    const { minValue, maxValue } = getBounds();
    const range = maxValue - minValue;
    const [low, high] = normalize(vals);
    if (range <= 0) return { lowPct: 0, highPct: 0 };
    const lowPct = ((low - minValue) / range) * 100;
    const highPct = ((high - minValue) / range) * 100;
    return {
      lowPct: Math.max(0, Math.min(100, lowPct)),
      highPct: Math.max(0, Math.min(100, highPct)),
    };
  });
  const updateFromEvent = (ev, getRect, thumb) => {
    const rect = getRect?.();
    if (!rect || rect.width === 0) return;
    const x = Math.min(Math.max(ev.clientX - rect.left, 0), rect.width);
    const ratio = x / rect.width;
    const { minValue, maxValue } = getBounds();
    const nextValue = minValue + ratio * (maxValue - minValue);
    let current = currentState;
    if (typeof currentState.get === 'function') current = currentState.get();
    const [low, high] = normalize(current);
    if (thumb === 'low') setValue([nextValue, high]);
    else setValue([low, nextValue]);
  };
  const startDrag = (ev, forcedThumb, trackEl) => {
    if (resolveBool(disabled)) return;
    ev.preventDefault?.();
    const track = trackEl || ev.currentTarget;
    const getRect = () => track.getBoundingClientRect();
    const rect = getRect();
    let percentValue = percent;
    if (typeof percent.get === 'function') percentValue = percent.get();
    const { lowPct, highPct } = percentValue;
    const clickPct = ((ev.clientX - rect.left) / rect.width) * 100;
    let thumb = forcedThumb;
    if (!thumb) {
      const isLow = Math.abs(clickPct - lowPct) <= Math.abs(clickPct - highPct);
      thumb = 'high';
      if (isLow) thumb = 'low';
    }
    track.setPointerCapture?.(ev.pointerId);
    updateFromEvent(ev, getRect, thumb);
    const handleMove = (moveEv) => updateFromEvent(moveEv, getRect, thumb);
    const handleUp = () => {
      track.releasePointerCapture?.(ev.pointerId);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-range-slider',
        classVar('g-ui-slider-size-', size, 'md'),
        classFlag('g-ui-slider-disabled', disabled),
        props.className ?? className
      ),
    },
    Div(
      { className: 'g-ui-slider-track', onPointerDown: (ev) => startDrag(ev) },
      Div({
        className: 'g-ui-slider-bar',
        style: after(percent).compute(({ lowPct, highPct }) => ({
          left: `${lowPct}%`,
          width: `${Math.max(0, highPct - lowPct)}%`,
        })),
      }),
      Div({
        className: 'g-ui-slider-thumb',
        style: after(percent).compute(({ lowPct }) => ({ left: `${lowPct}%` })),
        onPointerDown: (ev) => {
          ev.stopPropagation?.();
          startDrag(ev, 'low', ev.currentTarget.parentElement);
        },
      }),
      Div({
        className: 'g-ui-slider-thumb',
        style: after(percent).compute(({ highPct }) => ({ left: `${highPct}%` })),
        onPointerDown: (ev) => {
          ev.stopPropagation?.();
          startDrag(ev, 'high', ev.currentTarget.parentElement);
        },
      })
    ),
    when(marks, () => Div(
      { className: 'g-ui-slider-marks' },
      marks.map((mark) => SliderMark({ mark, getBounds }))
    ))
  );
}
