import { Span } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function Badge(...args) {
  const { props, children } = splitPropsChildren(args);
  const { variant = 'light', className, dot, style, ...rest } = props;
  const dotClass = classMap(variant, { dot: 'g-ui-badge-dot' });
  return Span(
    {
      ...rest,
      className: cx(
        'g-ui-badge',
        classVar('g-ui-badge-variant-', variant, 'light'),
        classFlag('g-ui-badge-dot', dot),
        dotClass,
        className
      ),
    },
    children
  );
}
