import { Div, Span, Input, when, after, state } from '@granularjs/core';
import { cx, splitPropsChildren, classVar, resolveValue, getDropdownPlacement } from '../utils.js';
import { checkedSvg, closeSvg } from '../theme/icons.js';
import { TextInput } from './TextInput.js';

export function MultiSelect(...args) {
  const { props, rawProps } = splitPropsChildren(args, { data: [], size: 'md', searchable: true });
  const {
    value, data, size, className, placeholder, searchable,
    label, description, error, disabled,
    style, labelStyle, descriptionStyle, errorStyle, inputWrapperStyle,
    ...rest
  } = props;
  const { onChange, onSearchChange } = rawProps;
  const currentState = state(resolveValue(value) ?? []);
  const searchState = state('');
  const openState = state(false);
  const placement = state('bottom');
  const rootNode = state(null);

  const normalizeData = (items) => {
    const resolved = resolveValue(items) ?? [];
    return resolved.map((item) => {
      if (typeof item === 'string') return { value: item, label: item };
      if (item && typeof item === 'object') return item;
      return { value: String(item), label: String(item) };
    });
  };

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(resolved);
  });
  let outsideCleanup = null;
  after(openState).change((next) => {
    if (outsideCleanup) {
      outsideCleanup();
      outsideCleanup = null;
    }
    if (!next) return;
    const handler = (ev) => {
      const root = rootNode.get();
      if (!root) return;
      if (root.contains(ev.target)) return;
      openState.set(false);
    };
    document.addEventListener('mousedown', handler);
    outsideCleanup = () => document.removeEventListener('mousedown', handler);
  });
  after(searchState).change((next) => {
    onSearchChange?.(next);
  });

  const toggle = (val) => {
    const selected = currentState.get() ?? [];
    const next = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : selected.concat(val);
    currentState.set(next);
    onChange?.(next);
  };

  let openedAt = 0;
  const toggleOpen = () => {
    if (resolveValue(disabled)) return;
    const isOpen = openState.get();
    if (isOpen) {
      openState.set(false);
    } else {
      placement.set(getDropdownPlacement(rootNode.get()));
      openState.set(true);
      openedAt = Date.now();
    }
  };

  let fromMouse = false;

  const normalizedData = after(data).compute((nextData) => normalizeData(nextData));
  const filteredItems = after(normalizedData, searchState).compute(([items, query]) => {
    const q = String(resolveValue(query) ?? '').toLowerCase().trim();
    if (!q) return items;
    return items.filter((item) => String(item.label ?? '').toLowerCase().includes(q));
  });
  const isEmpty = after(currentState, searchState).compute(([nextSelected, query]) => {
    const list = resolveValue(nextSelected) ?? [];
    const q = String(resolveValue(query) ?? '');
    return (!list.length) && !q;
  });
  const isSearchable = after(searchable).compute((next) => !!next);

  return Div(
    { ...rest, node: rootNode, style, className: cx('g-ui-select-multi-root', className), onClick: toggleOpen },
    TextInput(
      {
        label, description, error, size, disabled,
        labelStyle, descriptionStyle, errorStyle, inputWrapperStyle,
      },
      after(normalizedData, currentState).compute(([items, current]) => {
        const list = resolveValue(current) ?? [];
        return list.map((val) => {
          const match = (items ?? []).find((entry) => entry.value === val);
          const label = match?.label ?? val;
          return Span(
            { className: 'g-ui-select-tag' },
            Span(
              {
                className: 'g-ui-select-tag-label',
                onClick: (ev) => { ev?.stopPropagation?.(); },
              },
              label
            ),
            Span({
              className: 'g-ui-select-tag-remove',
              innerHTML: closeSvg,
              onClick: (ev) => {
                ev?.stopPropagation?.();
                toggle(val);
              },
            })
          );
        });
      }),
      when(isEmpty, () => Span({ className: 'g-ui-select-multi-placeholder' }, placeholder ?? 'Select...')),
      when(isSearchable, () =>
        Input({
          className: 'g-ui-select-multi-input',
          value: searchState,
          onInput: (ev) => searchState.set(ev.target?.value ?? ''),
          onMouseDown: (ev) => {
            fromMouse = true;
            ev?.stopPropagation?.();
          },
          onFocus: () => {
            if (fromMouse) { fromMouse = false; return; }
            if (!openState.get()) {
              placement.set(getDropdownPlacement(rootNode.get()));
              openState.set(true);
              openedAt = Date.now();
            }
          },
          onClick: (ev) => {
            ev?.stopPropagation?.();
            fromMouse = false;
            if (openState.get()) {
              if (Date.now() - openedAt < 200) return;
              openState.set(false);
            } else {
              placement.set(getDropdownPlacement(rootNode.get()));
              openState.set(true);
              openedAt = Date.now();
            }
          },
        })
      )
    ),
    when(openState, () =>
      Div(
        {
          className: cx('g-ui-select-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-select-dropdown-top' : '')),
          onClick: (ev) => ev.stopPropagation(),
        },
        after(filteredItems).compute((items) => {
          if (!items.length) {
            return Div({ className: 'g-ui-select-item' }, 'Nothing found');
          }
          return items.map((item) =>
            Div(
              {
                className: cx(
                  'g-ui-select-item',
                  item.disabled && 'g-ui-select-item-disabled',
                  after(currentState).compute((current) => {
                    const list = resolveValue(current) ?? [];
                    return list.includes(item.value) ? 'g-ui-select-item-active' : '';
                  })
                ),
                onClick: () => {
                  if (item.disabled) return;
                  toggle(item.value);
                },
              },
              Span({
                className: 'g-ui-select-item-check',
                innerHTML: after(currentState).compute((current) => {
                  const list = resolveValue(current) ?? [];
                  return list.includes(item.value) ? checkedSvg : '';
                }),
              }),
              Span({ className: 'g-ui-select-item-label' }, item.label)
            )
          );
        })
      )
    )
  );
}
