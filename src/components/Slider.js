import { Input, Div } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Slider(...args) {
  const { props } = splitPropsChildren(args);
  const { marks, className, ...rest } = props;
  return Div(
    { className: cx(className) },
    Input({ type: 'range', ...rest, className: 'g-ui-slider' }),
    marks
      ? Div(
          { className: 'g-ui-slider-marks' },
          marks.map((m) => Div(String(m)))
        )
      : null
  );
}
