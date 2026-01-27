import { Div, when } from 'granular';
import { splitPropsChildren } from '../utils.js';
import { Loading } from './Loading.js';

export function LoadingOverlay(...args) {
  const { props } = splitPropsChildren(args);
  const { visible, ...rest } = props;
  return when(visible, () => Div({ ...rest, className: 'g-ui-loading-overlay' }, Loading({})));
}
