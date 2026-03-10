import { Div, when } from '@granularjs/core';
import { splitPropsChildren } from '../utils.js';
import { Loading } from './Loading.js';

export function LoadingOverlay(...args) {
  const { props } = splitPropsChildren(args, { variant: 'spinner', size: 'md' });
  const { visible, variant, size, ...rest } = props;
  return when(visible, () => Div({ ...rest, className: 'g-ui-loading-overlay' }, Loading({ variant, size })));
}
