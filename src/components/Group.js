import { Div } from 'granular';
import { cx, splitPropsChildren, classVar, classMap, classFlag } from '../utils.js';

export function Group(...args) {
  const { props, children } = splitPropsChildren(args, { gap: 'md', align: 'center' });
  const { gap = 'md', align = 'center', position, wrap, className, style, ...rest } = props;
  const positionClass = classMap(position, {
    apart: 'g-ui-justify-between',
    center: 'g-ui-justify-center',
    right: 'g-ui-justify-end',
    left: 'g-ui-justify-start',
  });
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-group',
        classVar('g-ui-gap-', gap, 'md'),
        classVar('g-ui-align-', align, 'center'),
        positionClass,
        classFlag('g-ui-wrap', wrap),
        className
      ),
    },
    children
  );
}
