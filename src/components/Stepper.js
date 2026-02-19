import { Div, list } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';

export function Stepper(...args) {
  const { props } = splitPropsChildren(args, { active: 0, items: [] });
  const { active, items, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-stepper', className) },
    list(items, (item, idx) =>
      Div(
        { className: cx('g-ui-stepper-item', [active, (value) => {
          console.log('value', value, 'idx', idx);
          if (idx.get() === value) return 'g-ui-stepper-active';
          return '';
        }]) },
        Div({ className: 'g-ui-stepper-index' }, String(idx + 1)),
        Div({ className: 'g-ui-stepper-label' }, item.label)
      )
    )
  );
}
