import { Button, Div } from 'granular';
import { state, when } from 'granular';
import { cx, splitPropsChildren } from '../utils.js';

export function Accordion(...args) {
  const openedState = state(false)
  const { props, rawProps, children } = splitPropsChildren(args);
  
  if(!props.opened) {
    
  }
  const toggle = ()=>{
    openedState.set(!openedState.get())
  }
  
  
  const header = children[0]
  const content = children[1]
  return Div({ className: 'g-ui-accordion' },
    Div({ className: 'g-ui-accordion-header', onClick: toggle }, header),
    when(openedState, () => Div({ className: 'g-ui-accordion-content' }, content))
  )
}
