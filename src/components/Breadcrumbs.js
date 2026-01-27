import { Nav, Span } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Breadcrumbs(...args) {
  const { props, children } = splitPropsChildren(args, { separator: '/' });
  const { separator, className, ...rest } = props;
  const items = [];
  if (Array.isArray(children)) items.push(...children);
  else items.push(children);
  const filtered = items.filter(Boolean);
  const nodes = [];
  filtered.forEach((item, idx) => {
    nodes.push(item);
    if (idx < filtered.length - 1) {
      nodes.push(Span({ className: 'g-ui-breadcrumbs-separator' }, separator));
    }
  });
  return Nav({ ...rest, className: cx('g-ui-breadcrumbs', className) }, nodes);
}
