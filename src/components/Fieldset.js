import { Fieldset as HtmlFieldset, Legend, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Fieldset(...args) {
  const { props, children } = splitPropsChildren(args);
  const { legend, className, ...rest } = props;
  return HtmlFieldset(
    { ...rest, className: cx('g-ui-fieldset', className) },
    when(legend, () => Legend({ className: 'g-ui-legend' }, legend)),
    children
  );
}
