import { Div, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Timeline(...args) {
  const { props } = splitPropsChildren(args, { items: [] });
  const { items, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-timeline', className) },
    items.map((item) =>
      Div(
        { className: 'g-ui-timeline-item' },
        Div({ className: 'g-ui-timeline-dot' }),
        Div(
          { className: 'g-ui-timeline-content' },
          when(item.title, () => Div({ className: 'g-ui-timeline-title' }, item.title)),
          when(item.description, () => Div({ className: 'g-ui-timeline-desc' }, item.description)),
          item.content
        )
      )
    )
  );
}
