import { Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Flex(...args) {
  const { props, children } = splitPropsChildren(args, { direction: 'row' });
  const { direction, wrap, align, justify, gap, className, ...rest } = props;
  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-flex',
        [direction, (value) => {
          if (value === 'column') return 'g-ui-flex-column';
          return 'g-ui-flex-row';
        }],
        [wrap, 'g-ui-flex-wrap'],
        [align, (value) => value && `g-ui-align-${value}`],
        [justify, (value) => value && `g-ui-justify-${value}`],
        [gap, (value) => value && `g-ui-gap-${value}`],
        className
      ),
    },
    children
  );
}
