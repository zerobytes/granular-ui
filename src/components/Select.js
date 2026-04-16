import { Div, Span, when, state, after, Label } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, resolveValue, getDropdownPlacement } from '../utils.js';
import { keyboardArrowDownSvg } from '../theme/icons.js';
import { Icon } from './Icon.js';

export function Select(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: 'md' });
  const {
    data,
    value,
    size,
    leftSection,
    rightSection,
    placeholder,
    className,
    label,
    description,
    error,
    ...rest
  } = props;
  const { onChange } = rawProps;
  const open = state(false);
  const rootNode = state(null);
  const placement = state('bottom');
  const currentState = state(resolveValue(value) ?? '');

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved === undefined) return;
    currentState.set(resolved ?? '');
  });

  let outsideCleanup = null;
  after(open).change((next) => {
    if (outsideCleanup) { outsideCleanup(); outsideCleanup = null; }
    if (!next) return;
    const handler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      open.set(false);
    };
    document.addEventListener('mousedown', handler);
    outsideCleanup = () => document.removeEventListener('mousedown', handler);
  });

  const toggleOpen = () => {
    const next = !open.get();
    if (next) placement.set(getDropdownPlacement(rootNode.get()));
    open.set(next);
  };

  const selectValue = (next) => {
    currentState.set(next);
    onChange?.(next);
    open.set(false);
  };

  const valueClass = after(currentState).compute((current) => {
    if (!current) return 'g-ui-select-placeholder';
    return '';
  });
  const displayLabel = after(currentState).compute((current) => {
    const items = resolveValue(data) ?? [];
    const match = items.find((item) => item.value === current);
    if (current) return match?.label ?? '';
    return placeholder ?? '';
  });

  return Div(
    { ...rest, node: rootNode, className: cx('g-ui-select-root', className), onClick: toggleOpen },
    when(label, () => Label({ className: 'g-ui-text-input-label' }, label)),
    when(description, () => Span({ className: 'g-ui-text-input-description' }, description)),
    Div(
      {
        className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')),
      },
      when(leftSection, () => Div({ className: 'g-ui-input-section' }, leftSection)),
      Div({ className: cx('g-ui-select', valueClass) },
        Span({ className: 'g-ui-select-value' }, displayLabel)
      ),
      when(rightSection, () => Div({ className: 'g-ui-input-section' }, rightSection), () =>
        Span({ className: 'g-ui-select-caret' }, Icon({ innerHTML: keyboardArrowDownSvg }))
      )
    ),
    when(error, () => Div({ className: 'g-ui-text-input-error-text', onClick: (ev) => ev.stopPropagation() }, error)),
    when(open, () =>
      Div(
        {
          className: cx('g-ui-select-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-select-dropdown-top' : '')),
          onClick: (ev) => ev.stopPropagation(),
        },
        (resolveValue(data) ?? []).map((item) =>
          Div(
            {
              className: cx(
                'g-ui-select-item',
                after(currentState).compute((current) => {
                  if (current === item.value) return 'g-ui-select-item-active';
                  return '';
                })
              ),
              onClick: () => selectValue(item.value),
            },
            item.label
          )
        )
      )
    )
  );
}
