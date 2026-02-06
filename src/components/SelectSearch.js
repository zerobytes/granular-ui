import { Div, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';
import { state } from 'granular';
import { TextInput } from './TextInput.js';

export function SelectSearch(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [] });
  const { data, className, ...rest } = props;
  const { onChange } = rawProps;
  const query = state('');

  const items = data.filter((item) =>
    String(item.label || '').toLowerCase().includes(String(query.get()).toLowerCase())
  );

  return Div(
    { ...rest, className: cx('g-ui-select-search', className) },
    TextInput({
      inputClassName: 'g-ui-select-search-input',
      placeholder: 'Search...',
      value: query,
      onInput: (ev) => query.set(ev?.target?.value ?? ''),
    }),
    Div(
      { className: 'g-ui-select-search-list' },
      items.map((item) =>
        Div(
          {
            className: 'g-ui-select-search-item',
            onClick: () => onChange?.(item.value),
          },
          item.label
        )
      )
    )
  );
}
