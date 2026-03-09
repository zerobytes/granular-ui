import { Div, after, resolve } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';

function clampValue(v) {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

export function ProgressRing(...args) {
  const { props } = splitPropsChildren(args, { size: 'md', value: null, color: 'primary' });
  const { size, value, color, className, style, inset, ...rest } = props;


  const hasValue = after(value).compute((v) => v != null && v !== '');
  const ringValue = after(value).compute((v) => clampValue(v));
  const ringStyle = after(ringValue, hasValue, style, size).compute(([val, has, style, size]) => {
    const _style = { ...style };

    if (isFinite(size)) {
      _style.width = size + 'px';
      _style.height = size + 'px';
    }

    if (!has) return _style;
    const num = Number(val);
    const deg = Number.isNaN(num) ? 0 : Math.max(0, Math.min(360, num * 3.6));
    _style.background = `conic-gradient(var(--g-ui-progress-ring-fill, var(--g-ui-primary)) 0deg ${deg}deg, var(--g-ui-border-muted) ${deg}deg 360deg)`;
    return _style;
  });
  const holeStyle = after(inset).compute((inset) => {
    const _style = {};
    if (isFinite(inset)) {
      _style.inset = inset + 'px';
    }
    return _style;
  });
  const indeterminateClass = after(hasValue).compute((has) => (has ? '' : 'g-ui-progress-ring-indeterminate'));
  const ariaValueNow = after(hasValue, value).compute(([has, v]) => (has ? clampValue(v) : undefined));


  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-progress-ring',
        classVar('g-ui-progress-ring-', color, 'primary'),
        [size, (s) => `g-ui-progress-ring-size-${resolve(s) ?? 'md'}`],
        indeterminateClass,
        className
      ),
      style: ringStyle,
      role: 'progressbar',
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': ariaValueNow,
    },
    Div({ className: 'g-ui-progress-ring-hole', style: holeStyle })
  );
}
