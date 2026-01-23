import { H1, H2, H3, H4, H5, H6 } from 'granular';
import { cx, splitPropsChildren, resolveValue, classVar } from '../utils.js';

const map = { 1: H1, 2: H2, 3: H3, 4: H4, 5: H5, 6: H6 };

export function Title(...args) {
  const { props, children } = splitPropsChildren(args);
  const { order = 2, className, style, ...rest } = props;
  const orderValue = resolveValue(order) || 2;
  const Tag = map[orderValue] || H2;
  return Tag(
    {
      ...rest,
      className: cx('g-ui-title', classVar('g-ui-title-order-', order, 2), className),
    },
    children
  );
}
