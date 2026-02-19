import { Div, when, list, portal } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';
import { Toast } from './Toast.js';

export function ToastStack(...args) {
  const { props, rawProps } = splitPropsChildren(args, { items: [] });
  const { items, className, timeout, ...rest } = props;
  const { onClose } = rawProps;
  return portal(Div(
    { ...rest, className: cx('g-ui-toast-stack', className) },
    list(items, (item) =>
      Toast({ title: item.title, onClose: () => onClose?.(item) }, item.message)
    )
  ));
}
