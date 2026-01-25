import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Col(...args) {
  const { props, children } = splitPropsChildren(args, { span: 12 });
  const { span = 12, className, ...rest } = props;
  return Div({ ...rest, className: cx(`g-ui-col-span-${span}`, className) }, children);
}
