import { Div } from 'granular';
import { cx, splitPropsChildren, classVar, classMap } from '../utils.js';

export function Stack(...args) {
  const { props, children } = splitPropsChildren(args);
  const { gap = 'md', align, justify, className, style, ...rest } = props;
  const justifyClass = classMap(justify, {
    between: 'g-ui-justify-between',
    center: 'g-ui-justify-center',
    end: 'g-ui-justify-end',
    start: 'g-ui-justify-start',
  });
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-stack',
        classVar('g-ui-gap-', gap, 'md'),
        classVar('g-ui-align-', align),
        justifyClass,
        className
      ),
    },
    children
  );
}
