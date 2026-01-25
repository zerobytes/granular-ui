import { Div, after } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';
import { Text } from './Text.js';

export function Divider(...args) {
  const { props } = splitPropsChildren([{ label: '' }, ...args]);
  const { label, className, ...rest } = props;

  const labelClass = after(props.label).compute((value) => {
    if (value) return 'label'
  })
  const labelComponent = after(props.label).compute((value) => {
    if (value) return Text({ className: 'g-ui-divider-label-text', size: 'sm' }, value)
  })
  return Div({
    ...rest, className: cx(
      'g-ui-divider', labelClass, className
    )
  }, labelComponent);
}
