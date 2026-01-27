import { Div, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Notifications(...args) {
  const { props } = splitPropsChildren(args, { items: [] });
  const { items, className, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-notifications', className) },
    items.map((item) =>
      Div(
        { className: cx('g-ui-notification', item.color && `g-ui-notification-${item.color}`) },
        when(item.title, () => Div({ className: 'g-ui-notification-title' }, item.title)),
        item.message
      )
    )
  );
}
