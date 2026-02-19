import { Div, after, resolve } from '@granularjs/core';
import { cx, splitPropsChildren, classVar } from '../utils.js';

function clampValue(v) {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

export function ProgressRing(...args) {
  const { props } = splitPropsChildren(args, { size: 'md', value: null, color: 'primary' });
  const { size, value, color, className, ...rest } = props;

  const hasValue = after(value).compute((v) => v != null && v !== '');
  const ringValue = after(value).compute((v) => clampValue(v));
  const style = after(ringValue, hasValue).compute(([val, has]) => {
    if (!has) return {};
    const num = Number(val);
    const deg = Number.isNaN(num) ? 0 : Math.max(0, Math.min(360, num * 3.6));
    return {
      background: `conic-gradient(var(--g-ui-progress-ring-fill, var(--g-ui-primary)) 0deg ${deg}deg, var(--g-ui-border-muted) ${deg}deg 360deg)`,
    };
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
      style,
      role: 'progressbar',
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': ariaValueNow,
    },
    Div({ className: 'g-ui-progress-ring-hole' })
  );
}
