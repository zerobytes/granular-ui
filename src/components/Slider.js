import { Div, after, state, when } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, resolveBool, resolveValue } from '../utils.js';

export function Slider(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    size: 'md',
    min: 0,
    max: 100,
    step: 1,
  });
  const { onChange } = rawProps;
  const {
    value,
    marks,
    size,
    min,
    max,
    step,
    disabled,
    className,
    ...rest
  } = props;
  const currentState = state(resolveValue(value ?? min));
  after(value).change((next) => {
    if (next == null) return;
    currentState.set(resolveValue(next));
  });
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
  const setValue = (next) => {
    const { minValue, maxValue } = getBounds();
    const stepValue = getStep();
    const clamped = Math.max(minValue, Math.min(maxValue, Number(next)));
    const stepped = Math.round((clamped - minValue) / stepValue) * stepValue + minValue;
    if (stepped === currentState.get()) return;
    currentState.set(stepped);
    onChange?.(stepped);
  };
  const percent = after(currentState).compute((v) => {
    const { minValue, maxValue } = getBounds();
    const range = maxValue - minValue;
    if (range <= 0) return 0;
    const pct = ((Number(v ?? minValue) - minValue) / range) * 100;
    return Math.max(0, Math.min(100, pct));
  });
  const updateFromEvent = (ev, getRect) => {
    const rect = getRect?.();
    if (!rect || rect.width === 0) return;
    const x = Math.min(Math.max(ev.clientX - rect.left, 0), rect.width);
    const ratio = x / rect.width;
    const { minValue, maxValue } = getBounds();
    setValue(minValue + ratio * (maxValue - minValue));
  };
  const startDrag = (ev) => {
    if (resolveBool(disabled)) return;
    ev.preventDefault?.();
    const trackEl = ev.currentTarget;
    const getRect = () => trackEl.getBoundingClientRect();
    trackEl.setPointerCapture?.(ev.pointerId);
    updateFromEvent(ev, getRect);
    const handleMove = (moveEv) => updateFromEvent(moveEv, getRect);
    const handleUp = () => {
      trackEl.releasePointerCapture?.(ev.pointerId);
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
        'g-ui-slider',
        classVar('g-ui-slider-size-', size, 'md'),
        classFlag('g-ui-slider-disabled', disabled),
        className
      ),
    },
    Div(
      { className: 'g-ui-slider-track', onPointerDown: startDrag },
      Div({
        className: 'g-ui-slider-bar',
        style: after(percent).compute((p) => ({ width: `${p}%` })),
      }),
      Div({
        className: 'g-ui-slider-thumb',
        style: after(percent).compute((p) => ({ left: `${p}%` })),
      })
    ),
    when(marks, () => Div(
      { className: 'g-ui-slider-marks' },
      marks.map((mark) => SliderMark({ mark, getBounds }))
    ))
  );
}

export const SliderMark = ({ mark, getBounds }) => {
  const { minValue, maxValue } = getBounds();
  const range = maxValue - minValue;

  const value = mark.value ?? mark;
  const label = mark.label ?? String(mark.value) ?? value;

  const markValue = Number(value);
  let pct = 0;
  if (range > 0) pct = ((markValue - minValue) / range) * 100;
  return Div(
    {
      className: 'g-ui-slider-mark',
      style: { left: `${Math.max(0, Math.min(100, pct))}%` },
    },
    Div({ className: 'g-ui-slider-mark-label' }, label)
  );
}
