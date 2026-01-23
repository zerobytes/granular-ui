import { Fieldset as HtmlFieldset, Legend } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Fieldset(...args) {
  const { props, children } = splitPropsChildren(args);
  const { legend, className, ...rest } = props;
  return HtmlFieldset(
    { ...rest, className: cx('g-ui-fieldset', className) },
    legend ? Legend({ className: 'g-ui-legend' }, legend) : null,
    children
  );
}
