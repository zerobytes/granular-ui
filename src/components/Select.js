import { Div, Span, when, state, after, list } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, getDropdownPlacement } from '../utils.js';
import { keyboardArrowDownSvg } from '../theme/icons.js';
import { Icon } from './Icon.js';
import { TextInput } from './TextInput.js';

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
    disabled,
    style,
    labelStyle,
    descriptionStyle,
    errorStyle,
    inputWrapperStyle,
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

  let lastSelectedAt = 0;

  const toggleOpen = () => {
    if (resolveValue(disabled)) return;
    if (Date.now() - lastSelectedAt < 200) return;
    const next = !open.get();
    if (next) placement.set(getDropdownPlacement(rootNode.get()));
    open.set(next);
  };

  const selectValue = (next) => {
    currentState.set(next);
    onChange?.(next);
    open.set(false);
    lastSelectedAt = Date.now();
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

  const hasCustomRight = rawProps.rightSection !== undefined;
  const finalRightSection = hasCustomRight
    ? rightSection
    : Span({ className: 'g-ui-select-caret' }, Icon({ innerHTML: keyboardArrowDownSvg }));

  return Div(
    { ...rest, node: rootNode, style, className: cx('g-ui-select-root', className), onClick: toggleOpen },
    TextInput(
      {
        label, description, error, size, leftSection, disabled,
        labelStyle, descriptionStyle, errorStyle, inputWrapperStyle,
        rightSection: finalRightSection,
      },
      Div({ className: cx('g-ui-select', valueClass) },
        Span({ className: 'g-ui-select-value' }, displayLabel)
      )
    ),
    when(open, () =>
      Div(
        {
          className: cx('g-ui-select-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-select-dropdown-top' : '')),
          onClick: (ev) => ev.stopPropagation(),
        },
        list(data, (item) =>
          Div(
            {
              className: cx(
                'g-ui-select-item',
                after(currentState, item.value).compute(([current, val]) =>
                  current === val ? 'g-ui-select-item-active' : ''
                )
              ),
              onClick: () => selectValue(item.value.get()),
            },
            item.label
          )
        )
      )
    )
  );
}
