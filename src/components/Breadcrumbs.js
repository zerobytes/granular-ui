import { Nav, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Breadcrumbs(...args) {
  const { props, children } = splitPropsChildren(args);
  const { separator = '/', className, ...rest } = props;
  const items = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean);
  const nodes = [];
  items.forEach((item, idx) => {
    nodes.push(item);
    if (idx < items.length - 1) {
      nodes.push(Span({ className: 'g-ui-breadcrumbs-separator' }, separator));
    }
  });
  return Nav({ ...rest, className: cx('g-ui-breadcrumbs', className) }, nodes);
}
