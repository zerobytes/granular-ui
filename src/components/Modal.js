import { Div, Button as HtmlButton, portal, when, after } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';
import { closeSvg } from '../theme/icons.js';



export function Modal(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { size: 'md', centered: true, overlay: 'normal' });
  const {
    opened,
    title,
    size,
    centered,
    overlay,
    position,
    className,
    style,
  } = props;
  const { onClose } = rawProps;
  const positionClass = after(position, centered).compute(([pos, isCentered]) => {
    const value = pos ?? (isCentered === false ? 'top-center' : 'center');
    return `g-ui-modal-position-${value}`;
  });

  return when(opened, () =>
    portal(
      Div(
        {
          className: cx(
            'g-ui-modal-overlay',
            classVar('g-ui-modal-overlay-', overlay, 'normal'),
            positionClass
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
              HtmlButton(
                {
                  type: 'button',
                  className: 'g-ui-button g-ui-button-variant-subtle g-ui-button-size-xs g-ui-modal-close',
                  onClick: onClose,
                  innerHTML: closeSvg,
                }
              )
            )
          ),
          children
        )
      )
    )
  );
}
