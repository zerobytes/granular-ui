import { Div, Select as HtmlSelect, Option } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Select(...args) {
  const { props } = splitPropsChildren(args, { data: [], size: 'md' });
  const { data = [], size = 'md', leftSection, rightSection, placeholder, className, style, ...rest } = props;
  return Div(
    { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md'), className) },
    leftSection ? Div({ className: 'g-ui-input-section' }, leftSection) : null,
    HtmlSelect(
      {
        ...rest,
        className: 'g-ui-select',
      },
      placeholder ? Option({ value: '', disabled: true, selected: true }, placeholder) : null,
      data.map((item) => Option({ value: item.value }, item.label))
    ),
    rightSection ? Div({ className: 'g-ui-input-section' }, rightSection) : null
  );
}
