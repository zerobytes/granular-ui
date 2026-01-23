import { Div, when } from 'granular';
import { state } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Popper(...args) {
  const { props, children } = splitPropsChildren(args);
  const { opened, onChange, content, className, ...rest } = props;
  const internal = state(false);
  const current = opened?.get ? opened.get() : opened ?? internal.get();

  const setOpen = (next) => {
    if (opened?.set) opened.set(next);
    else internal.set(next);
    onChange?.(next);
  };

  return Div(
    { ...rest, className: cx('g-ui-popper', className) },
    Div({ onClick: () => setOpen(!current) }, children),
    when(current, () => Div({ className: 'g-ui-popper-dropdown' }, content))
  );
}
