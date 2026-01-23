import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Timeline(...args) {
  const { props } = splitPropsChildren(args);
  const { items = [], className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-timeline', className) },
    items.map((item) =>
      Div(
        { className: 'g-ui-timeline-item' },
        Div({ className: 'g-ui-timeline-dot' }),
        Div(
          { className: 'g-ui-timeline-content' },
          item.title ? Div({ className: 'g-ui-timeline-title' }, item.title) : null,
          item.description ? Div({ className: 'g-ui-timeline-desc' }, item.description) : null,
          item.content
        )
      )
    )
  );
}
