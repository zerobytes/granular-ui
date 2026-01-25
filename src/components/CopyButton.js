import { Button, after, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';
import { state } from 'granular';

export function CopyButton(...args) {
  const { props, children } = splitPropsChildren(args, { value: '', timeout: 1500 });
  const { value = '', timeout = 1500, className, ...rest } = props;
  const copied = state(false);
  const buttonClass = after(copied).compute((next) =>
    cx('g-ui-copy-button', next && 'g-ui-copy-button-done', className)
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(String(value));
      copied.set(true);
      setTimeout(() => copied.set(false), timeout);
    } catch {}
  };

  return Button(
    {
      ...rest,
      className: buttonClass,
      onClick: copy,
      type: 'button',
    },
    children?.length ? children : when(copied, () => 'Copied', () => 'Copy')
  );
}
