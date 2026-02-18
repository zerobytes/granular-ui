import { Span } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function Text(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md' });
  const { size, weight, color, dimmed, align, ellipsis, decoration, className, style, ...rest } = props;
  const weightClass = classMap(weight, {
    bold: 'g-ui-text-weight-700',
    semibold: 'g-ui-text-weight-600',
    medium: 'g-ui-text-weight-500',
    700: 'g-ui-text-weight-700',
    600: 'g-ui-text-weight-600',
    500: 'g-ui-text-weight-500',
    400: 'g-ui-text-weight-400',
  });
  const colorClass = classMap(color, {
    primary: 'g-ui-text-primary',
    success: 'g-ui-text-success',
    danger: 'g-ui-text-danger',
    muted: 'g-ui-text-dimmed',
  });
  const alignClass = classMap(align, {
    center: 'g-ui-text-align-center',
    right: 'g-ui-text-align-right',
    left: 'g-ui-text-align-left',
  });
  const decorationClass = classMap(decoration, {
    underline: 'g-ui-text-decoration-underline',
    'line-through': 'g-ui-text-decoration-line-through',
    overline: 'g-ui-text-decoration-overline',
    none: 'g-ui-text-decoration-none',
  });
  return Span(
    {
      ...rest,
      style,
      className: cx(
        'g-ui-text',
        classVar('g-ui-text-size-', size, 'md'),
        classFlag('g-ui-text-dimmed', dimmed),
        classFlag('g-ui-text-ellipsis', ellipsis),
        weightClass,
        colorClass,
        alignClass,
        decorationClass,
        className
      ),
    },
    children
  );
}
