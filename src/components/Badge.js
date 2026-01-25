import { Span } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function Badge(...args) {
  const { props, children } = splitPropsChildren(args, { variant: 'filled', size: 'md' });
  const { variant = 'filled', size = 'md', className, dot, style, ...rest } = props;
  const dotClass = classMap(variant, { dot: 'g-ui-badge-dot' });
  return Span(
    {
      ...rest,
      className: cx(
        'g-ui-badge',
        classVar('g-ui-badge-variant-', variant, 'filled'),
        classVar('g-ui-badge-size-', size, 'md'),
        classFlag('g-ui-badge-dot', dot),
        dotClass,
        className
      ),
    },
    children
  );
}
