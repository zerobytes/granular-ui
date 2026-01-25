import { Div } from 'granular';
import { cx, splitPropsChildren, classFlag, classVar } from '../utils.js';
import { Text } from './Text.js';

export function Divider(...args) {
  const { props } = splitPropsChildren(args, { labelPosition: 'center' });
  const { label, labelPosition = 'center', className, ...rest } = props;

  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-divider',
        classFlag('label', label),
        classVar('g-ui-divider-label-', labelPosition, 'center'),
        className
      ),
    },
    label ? Text({ className: 'g-ui-divider-label-text', size: 'sm' }, label) : null
  );
}
