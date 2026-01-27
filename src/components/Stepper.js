import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Stepper(...args) {
  const { props } = splitPropsChildren(args, { active: 0, items: [] });
  const { active, items, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-stepper', className) },
    items.map((item, idx) =>
      Div(
        { className: cx('g-ui-stepper-item', [active, (value) => {
          if (idx === value) return 'g-ui-stepper-active';
          return '';
        }]) },
        Div({ className: 'g-ui-stepper-index' }, String(idx + 1)),
        Div({ className: 'g-ui-stepper-label' }, item.label)
      )
    )
  );
}
