import { Div } from '@granularjs/core';
import { state, when, after } from '@granularjs/core';
import { cx, splitPropsChildren, resolveBool, isReactive } from '../utils.js';

export function Accordion(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { opened: false });
  const { opened, className, ...rest } = props;
  const { opened: rawOpened } = rawProps;
  const isControlledOutside = isReactive(rawOpened)
  const openedState = isControlledOutside ? rawOpened : state(resolveBool(opened));

  after(opened).change((next) => {
    if(isControlledOutside) return;
    openedState.set(resolveBool(next));
  });

  const toggle = () => {
    if(isControlledOutside) return;
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
