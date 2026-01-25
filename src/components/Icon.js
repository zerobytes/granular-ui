import { Span } from 'granular';
import { cx, splitPropsChildren, classVar } from '../utils.js';

export function Icon(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md' });
  
  return Span(
    {
      ...props,
      className: cx(
        'g-ui-icon',
        classVar('g-ui-icon-size-', props.size, 'md'),
        classVar('g-ui-icon-color-', props.color),
        props.className
      ),
    },
    ...children
  );
}
