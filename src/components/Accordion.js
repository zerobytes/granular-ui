import { Button, Div } from 'granular';
import { state, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Accordion(...args) {
  const { props } = splitPropsChildren(args);
  const { items = [], value, defaultValue, multiple, className, style } = props;
  const internal = state(defaultValue ?? (multiple ? [] : null));
  const current = value?.get ? value.get() : value ?? internal.get();

  const setValue = (next) => {
    if (value?.set) value.set(next);
    else internal.set(next);
  };

  const toggle = (val) => {
    if (multiple) {
      const list = Array.isArray(current) ? current.slice() : [];
      const idx = list.indexOf(val);
      if (idx >= 0) list.splice(idx, 1);
      else list.push(val);
      setValue(list);
      return;
    }
    setValue(current === val ? null : val);
  };

  const isOpen = (val) => (multiple ? Array.isArray(current) && current.includes(val) : current === val);

  return Div(
    { className: cx('g-ui-accordion', className) },
    items.map((item) =>
      Div(
        { className: 'g-ui-accordion-item' },
        Button(
          { className: 'g-ui-accordion-control', type: 'button', onClick: () => toggle(item.value) },
          item.label
        ),
        when(isOpen(item.value), () => Div({ className: 'g-ui-accordion-panel' }, item.content))
      )
    )
  );
}
