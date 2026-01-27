import { Div, Button as HtmlButton, portal, when } from 'granular';
import { cx, splitPropsChildren, classVar, classMap } from '../utils.js';

export function Modal(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: 'md', centered: true, overlay: 'normal' });
  const {
    opened,
    title,
    size,
    centered,
    overlay,
    className,
    style,
  } = props;
  const { onClose } = rawProps;

  return when(opened, () =>
    portal(
      Div(
        {
          className: cx(
            'g-ui-modal-overlay',
            classVar('g-ui-modal-overlay-', overlay, 'normal'),
            classMap(centered, { true: 'g-ui-modal-centered', false: 'g-ui-modal-top' }, true)
          ),
          onClick: (ev) => {
            if (ev.target === ev.currentTarget) onClose?.();
          },
        },
        Div(
          {
            className: cx('g-ui-modal', classVar('g-ui-modal-size-', size, 'md'), className),
          },
          Div(
            { className: 'g-ui-modal-header' },
            when(title, () => Div({ className: 'g-ui-modal-title' }, title)),
            when(onClose, () =>
              HtmlButton({ className: 'g-ui-button g-ui-button-variant-subtle g-ui-button-size-xs', onClick: onClose }, 'Close')
            )
          ),
          children
        )
      )
    )
  );
}
