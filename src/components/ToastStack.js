import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function ToastStack(...args) {
  const { props } = splitPropsChildren(args, { items: [] });
  const { items = [], className, onClose, timeout, ...rest } = props;
  return Div(
    { ...rest, className: cx('g-ui-toast-stack', className) },
    items.map((item) =>
      Div(
        { className: cx('g-ui-toast', timeout && 'g-ui-toast-auto') },
        Div(
          { className: 'g-ui-toast-row' },
          item.title ? Div({ className: 'g-ui-toast-title' }, item.title) : null,
          onClose ? Div({ className: 'g-ui-toast-close', onClick: () => onClose(item) }, '×') : null
        ),
        item.message
      )
    )
  );
}
