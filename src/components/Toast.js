import { Div, Button, when, state} from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';
import { closeSvg } from '../theme/icons.js';
import { Icon } from './Icon.js';

export function Toast(...args) {
  const { props, rawProps, children } = splitPropsChildren(args);
  const { title,  className, ...rest } = props;
  const { onClose } = rawProps;
  const visible = state(true);
  const close = () => {
    visible.set(false);
    onClose?.();
    console.log('close');
  }

  return when(visible, () => Div(
    { ...rest, className: cx('g-ui-toast', className) },
    Div(
      { className: 'g-ui-toast-row' },
      when(title, () => Div({ className: 'g-ui-toast-title' }, title)),
      Button({ className: 'g-ui-toast-close', onClick: close },
        Icon({ innerHTML: closeSvg })
      )
    ),
    children
  ))
}
