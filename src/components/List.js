import { Ul, Ol, Li, Div, Span, after, when, isSignal, isState, isStatePath, isComputed } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, classMap } from '../utils.js';

export function List(...args) {
  const { props, children } = splitPropsChildren(args, { type: 'none', size: 'md' });
  const { type, size, withPadding, className, ...rest } = props;
  const typeClass = classMap(type, {
    ordered: 'g-ui-list-ordered',
    unordered: 'g-ui-list-unordered',
    none: 'g-ui-list-none',
  });
  const isOrdered = after(type).compute((next) => next === 'ordered');
  const isListNode = (value) =>
    value && typeof value === 'object' && typeof value.tagName === 'string' &&
    (value.tagName.toLowerCase() === 'ul' || value.tagName.toLowerCase() === 'ol');
  const isListItemNode = (value) =>
    value && typeof value === 'object' && typeof value.tagName === 'string' &&
    value.tagName.toLowerCase() === 'li';
  const wrapChild = (child) => {
    const wrapValue = (value) => {
      if (value == null || value === false) return null;
      if (Array.isArray(value)) return value.map((item) => wrapValue(item));
      if (isListItemNode(value)) return value;
      if (isListNode(value)) return Li({ className: 'g-ui-list-nested-item' }, value);
      return Li(Span({ className: 'g-ui-list-item-shell' }, value));
    };
    if (isSignal(child) || isState(child) || isStatePath(child) || isComputed(child)) {
      return after(child).compute((next) => wrapValue(next));
    }
    return wrapValue(child);
  };
  const listChildren = children.map((child) => wrapChild(child));
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
    () => Ol(listProps, listChildren),
    () => Ul(listProps, listChildren)
  );
}

export function ListItem(...args) {
  const { props, children } = splitPropsChildren(args, { withBorder: false });
  const { leftSection, rightSection, title, body, withBorder, className, ...rest } = props;
  const hasStructured = after(title, body).compute(([nextTitle, nextBody]) => !!nextTitle || !!nextBody);
  return Li(
    {
      ...rest,
      className: cx('g-ui-list-item', classFlag('g-ui-list-item-border', withBorder), className),
    },
    Div(
      { className: 'g-ui-list-item-shell' },
      when(leftSection, () => Span({ className: 'g-ui-list-item-section g-ui-list-item-section-left' }, leftSection)),
      when(
        hasStructured,
        () =>
          Div(
            { className: 'g-ui-list-item-content' },
            when(title, () => Div({ className: 'g-ui-list-item-title' }, title)),
            when(body, () => Div({ className: 'g-ui-list-item-body' }, body))
          ),
        () => children
      ),
      when(rightSection, () => Span({ className: 'g-ui-list-item-section g-ui-list-item-section-right' }, rightSection))
    )
  );
}

List.Item = ListItem;
