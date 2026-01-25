import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Stepper(...args) {
  const { props } = splitPropsChildren(args, { active: 0, items: [] });
  const { active = 0, items = [], className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-stepper', className) },
    items.map((item, idx) =>
      Div(
        { className: cx('g-ui-stepper-item', [active, (value) => (idx === value ? 'g-ui-stepper-active' : '')]) },
        Div({ className: 'g-ui-stepper-index' }, String(idx + 1)),
        Div({ className: 'g-ui-stepper-label' }, item.label)
      )
    )
  );
}
