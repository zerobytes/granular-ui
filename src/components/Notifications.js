import { Div, when, after } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';
import { Notification } from './Notification.js';

export function Notifications(...args) {
  const { props, rawProps } = splitPropsChildren(args, { items: [], position: 'top-right' });
  const { items, position, className, ...rest } = props;
  const { onRemove } = rawProps;
  const timers = new Map();

  const getId = (item, index) => item?.id ?? item?.key ?? index;

  const notifications = after(items).compute((nextItems) => {
    const list = resolveValue(nextItems) ?? [];
    const active = new Set();
    list.forEach((item, index) => {
      const id = getId(item, index);
      active.add(id);
      if (item?.autoClose && !timers.has(id)) {
        const timeout = setTimeout(() => {
          timers.delete(id);
          onRemove?.(item);
        }, item.autoClose);
        timers.set(id, timeout);
      }
    });
    for (const [id, handle] of timers.entries()) {
      if (!active.has(id)) {
        clearTimeout(handle);
        timers.delete(id);
      }
    }
    return list.map((item, index) =>
      Notification(
        {
          key: getId(item, index),
          title: item.title,
          color: item.color,
          icon: item.icon,
          loading: item.loading,
          withCloseButton: item.withCloseButton,
          withBorder: item.withBorder,
          onClose: () => {
            item.onClose?.();
            onRemove?.(item);
          },
        },
        item.message ?? item.body ?? item.content ?? item.text
      )
    );
  });
  return Div(
    {
      ...rest,
      className: cx('g-ui-notifications', classVar('g-ui-notifications-position-', position, 'top-right'), className),
    },
    notifications
  );
}
