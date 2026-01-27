import { Ul, Ol, after, when } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function List(...args) {
  const { props, children } = splitPropsChildren(args, { type: 'unordered', size: 'md' });
  const { type, size, withPadding, className, ...rest } = props;
  const typeClass = classMap(type, {
    ordered: 'g-ui-list-ordered',
    unordered: 'g-ui-list-unordered',
    none: 'g-ui-list-none',
  });
  const isOrdered = after(type).compute((next) => next === 'ordered');
  const listProps = {
    ...rest,
    className: cx(
      'g-ui-list',
      classVar('g-ui-list-size-', size, 'md'),
      classFlag('g-ui-list-with-padding', withPadding),
      typeClass,
      className
    ),
  };
  return when(
    isOrdered,
    () => Ol(listProps, children),
    () => Ul(listProps, children)
  );
}
