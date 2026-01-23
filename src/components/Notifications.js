import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Notifications(...args) {
  const { props } = splitPropsChildren(args);
  const { items = [], className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-notifications', className) },
    items.map((item) =>
      Div(
        { className: cx('g-ui-notification', item.color && `g-ui-notification-${item.color}`) },
        item.title ? Div({ className: 'g-ui-notification-title' }, item.title) : null,
        item.message
      )
    )
  );
}
