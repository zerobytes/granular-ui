import { Div } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Progress(...args) {
  const { props } = splitPropsChildren(args, { value: 0, color: 'primary', size: 'md' });
  const { value, color, size, className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-progress',
        classVar('g-ui-progress-size-', size, 'md'),
        [value, (next) => {
          const pct = Math.max(0, Math.min(100, Number(next) || 0));
          const bucket = Math.round(pct / 5) * 5;
          return `g-ui-progress-${bucket}`;
        }],
        [color, (next) => {
          if (next) return `g-ui-progress-${next}`;
          return '';
        }],
        className
      ),
    },
    Div({ className: 'g-ui-progress-bar' })
  );
}
