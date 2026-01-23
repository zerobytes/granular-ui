import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Flex(...args) {
  const { props, children } = splitPropsChildren(args);
  const { direction = 'row', wrap, align, justify, gap, className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-flex',
        direction === 'column' ? 'g-ui-flex-column' : 'g-ui-flex-row',
        wrap && 'g-ui-flex-wrap',
        align && `g-ui-align-${align}`,
        justify && `g-ui-justify-${justify}`,
        gap && `g-ui-gap-${gap}`,
        className
      ),
    },
    children
  );
}
