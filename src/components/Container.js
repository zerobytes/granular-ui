import { Div } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag } from '../utils.js';

export function Container(...args) {
  const { props, children } = splitPropsChildren(args, { size: 'md' });
  const { size = 'md', fluid, className, style, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-container',
        classFlag('g-ui-container-fluid', fluid),
        classVar('g-ui-container-size-', size, 'md'),
        className
      ),
    },
    children
  );
}
