import { Calendar } from './Calendar.js';
import { splitPropsChildren } from '../utils.js';

export function DatePicker(...args) {
  const { props } = splitPropsChildren(args);
  return Calendar(props);
}
