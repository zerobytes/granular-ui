import { Select as HtmlSelect, Option } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Select(...args) {
  const { props } = splitPropsChildren(args);
  const { data = [], placeholder, className, style, ...rest } = props;
  return HtmlSelect(
    {
      ...rest,
      className: cx('g-ui-select', className),
    },
    placeholder ? Option({ value: '', disabled: true, selected: true }, placeholder) : null,
    data.map((item) => Option({ value: item.value }, item.label))
  );
}
