import { Div, Input, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';
import { state } from 'granular';

export function SelectSearch(...args) {
  const { props } = splitPropsChildren(args);
  const { data = [], onChange, className, ...rest } = props;
  const query = state('');

  const items = data.filter((item) =>
    String(item.label || '').toLowerCase().includes(String(query.get()).toLowerCase())
  );

  return Div(
    { ...rest, className: cx('g-ui-select-search', className) },
    Input({
      className: 'g-ui-select-search-input',
      placeholder: 'Search...',
      value: query,
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
