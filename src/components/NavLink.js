import { A, Div, Span, when, after, state } from 'granular';
import { cx, splitPropsChildren, classVar, classFlag, resolveValue, toPx } from '../utils.js';

export function NavLink(...args) {
  const { props, rawProps, children } = splitPropsChildren(args, { variant: 'subtle', childrenOffset: 24 });
  const {
    label,
    description,
    leftSection,
    rightSection,
    active,
    disabled,
    variant,
    childrenOffset,
    opened,
    defaultOpened,
    className,
    padding,
    ...rest
  } = props;
  const { onClick, onChange } = rawProps;
  const hasChildren = children.length > 0;
  const openState = state(resolveValue(opened) ?? resolveValue(defaultOpened) ?? false);
  after(opened).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    openState.set(!!resolved);
  });
  const childrenStyle = after(childrenOffset).compute((next) => ({
    paddingLeft: toPx(resolveValue(next ?? 24)) ?? '24px',
  }));

  const handleClick = (ev) => {
    if (resolveValue(disabled)) {
      ev?.preventDefault?.();
      return;
    }
    if (hasChildren) {
      const next = !openState.get();
      openState.set(next);
      onChange?.(next);
    }
    onClick?.(ev);
  };

  return Div(
    { className: cx('g-ui-navlink-root', className) },
    A(
      {
        ...rest,
        className: cx(
          'g-ui-navlink',
          classVar('g-ui-navlink-variant-', variant, 'subtle'),
          classFlag('g-ui-navlink-active', active),
          classFlag('g-ui-navlink-disabled', disabled),
          classVar('g-ui-navlink-padding-', padding, 'md')
        ),
        onClick: handleClick,
      },
      when(leftSection, () => Span({ className: 'g-ui-navlink-section g-ui-navlink-left' }, leftSection)),
      Div(
        { className: 'g-ui-navlink-body' },
        when(label, () => Div({ className: 'g-ui-navlink-label' }, label)),
        when(description, () => Div({ className: 'g-ui-navlink-description' }, description))
      ),
      when(rightSection, () => Span({ className: 'g-ui-navlink-section g-ui-navlink-right' }, rightSection))
    ),
    hasChildren
      ? when(openState, () => Div({ className: 'g-ui-navlink-children', style: childrenStyle }, children))
      : null
  );
}
