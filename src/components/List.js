import { Ul, Ol } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function List(...args) {
  const { props, children } = splitPropsChildren(args, { type: 'unordered', size: 'md' });
  const { type = 'unordered', size = 'md', withPadding, className, ...rest } = props;
  const Tag = type === 'ordered' ? Ol : Ul;
  const typeClass = classMap(type, {
    ordered: 'g-ui-list-ordered',
    unordered: 'g-ui-list-unordered',
    none: 'g-ui-list-none',
  });
  return Tag(
    {
      ...rest,
      className: cx(
        'g-ui-list',
        classVar('g-ui-list-size-', size, 'md'),
        classFlag('g-ui-list-with-padding', withPadding),
        typeClass,
        className
      ),
    },
    children
  );
}
