import { Div } from 'granular';
import { state, when, after } from 'granular';
import { cx, splitPropsChildren, resolveBool } from '../utils.js';

export function Accordion(...args) {
  const { props, children } = splitPropsChildren(args, { opened: false });
  const { opened = false, className, ...rest } = props;
  const openedState = state(resolveBool(opened));

  after(opened).change((next) => {
    openedState.set(resolveBool(next));
  });

  const toggle = () => {
    openedState.set(!openedState.get());
  };

  const header = children[0];
  const content = children[1];
  return Div(
    { ...rest, className: cx('g-ui-accordion', className) },
    Div({ className: 'g-ui-accordion-header', onClick: toggle }, header),
    when(openedState, () => Div({ className: 'g-ui-accordion-content' }, content))
  );
}
