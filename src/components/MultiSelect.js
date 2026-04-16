import { Div, Span, Input, when, after, state, list } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, getDropdownPlacement } from '../utils.js';
import { checkedSvg, closeSvg } from '../theme/icons.js';
import { TextInput } from './TextInput.js';

function asArray(value) {
  const v = resolveValue(value);
  return Array.isArray(v) ? v : [];
}

export function MultiSelect(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    data: [],
    size: 'md',
    searchable: true,
    emptySearchMessage: 'Nothing found',
  });
  const {
    value, data, size, className, placeholder, searchable, emptySearchMessage,
    label, description, error, disabled,
    style, labelStyle, descriptionStyle, errorStyle, inputWrapperStyle,
    ...rest
  } = props;
  const { onChange, onSearchChange } = rawProps;
  const currentState = state(asArray(value));
  const searchState = state('');
  const openState = state(false);
  const placement = state('bottom');
  const rootNode = state(null);

  const normalizeData = (items) => {
    const resolved = asArray(items);
    return resolved.map((item) => {
      if (typeof item === 'string') return { value: item, label: item };
      if (item && typeof item === 'object') return item;
      return { value: String(item), label: String(item) };
    });
  };

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved == null) return;
    currentState.set(asArray(resolved));
  });

  const normalizedItems = state(normalizeData(resolveValue(data)));
  const filteredItemsState = state(normalizedItems.get());

  after(data).change((nextData) => {
    normalizedItems.set(normalizeData(nextData));
    applyFilter();
  });

  const applyFilter = () => {
    const items = normalizedItems.get();
    const q = String(searchState.get() ?? '').toLowerCase().trim();
    if (!q) { filteredItemsState.set(items); return; }
    filteredItemsState.set(items.filter((item) => String(item.label ?? '').toLowerCase().includes(q)));
  };

  after(searchState).change((next) => {
    onSearchChange?.(next);
    applyFilter();
  });

  let outsideCleanup = null;
  after(openState).change((next) => {
    if (outsideCleanup) { outsideCleanup(); outsideCleanup = null; }
    if (!next) {
      searchState.set('');
      return;
    }
    const mouseHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      openState.set(false);
    };
    const focusHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      openState.set(false);
    };
    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('focusin', focusHandler);
    outsideCleanup = () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('focusin', focusHandler);
    };
  });

  const toggle = (val) => {
    const selected = asArray(currentState.get());
    const next = selected.includes(val)
      ? selected.filter((v) => v !== val)
      : selected.concat(val);
    currentState.set(next);
    onChange?.(next);
  };

  let openedAt = 0;
  const toggleOpen = () => {
    if (resolveValue(disabled)) return;
    if (Date.now() - openedAt < 200) return;
    const isOpen = openState.get();
    if (isOpen) {
      openState.set(false);
    } else {
      placement.set(getDropdownPlacement(rootNode.get()));
      openState.set(true);
      openedAt = Date.now();
      setTimeout(() => {
        const root = rootNode.get();
        if (!root) return;
        const input = root.querySelector('.g-ui-select-multi-input');
        if (input) input.focus();
      }, 0);
    }
  };

  const isEmpty = after(currentState, searchState).compute(([nextSelected, query]) => {
    const arr = asArray(nextSelected);
    const q = String(resolveValue(query) ?? '');
    return (!arr.length) && !q;
  });
  const isSearchable = after(searchable).compute((next) => !!next);
  const hasItems = after(filteredItemsState).compute((items) => !!(items && items.length));
  const notSearchableClass = after(searchable).compute((s) => s ? '' : 'g-ui-select-multi-not-searchable');

  return Div(
    { ...rest, node: rootNode, style, className: cx('g-ui-select-multi-root', notSearchableClass, className), onClick: toggleOpen },
    TextInput(
      {
        label, description, error, size, disabled,
        labelStyle, descriptionStyle, errorStyle, inputWrapperStyle,
      },
      after(normalizedItems, currentState).compute(([items, current]) => {
        const selected = asArray(current);
        const sourceItems = Array.isArray(items) ? items : [];
        return selected.map((val) => {
          const match = sourceItems.find((entry) => entry.value === val);
          const tagLabel = match?.label ?? val;
          return Span(
            { className: 'g-ui-select-tag' },
            Span(
              {
                className: 'g-ui-select-tag-label',
                onClick: (ev) => { ev?.stopPropagation?.(); },
              },
              tagLabel
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
          onClick: (ev) => ev?.stopPropagation?.(),
          onMouseDown: (ev) => ev?.stopPropagation?.(),
          onFocus: () => {
            if (!openState.get()) {
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
          onMouseDown: (ev) => { ev.stopPropagation(); ev.preventDefault(); },
        },
        when(hasItems,
          () => list(filteredItemsState, (item) =>
            Div(
              {
                className: cx(
                  'g-ui-select-item',
                  after(item.disabled).compute((d) => d ? 'g-ui-select-item-disabled' : ''),
                  after(currentState).compute((current) => {
                    const selected = asArray(current);
                    return selected.includes(item.value.get()) ? 'g-ui-select-item-active' : '';
                  })
                ),
                onClick: () => {
                  if (item.disabled.get()) return;
                  toggle(item.value.get());
                },
              },
              Span({
                className: 'g-ui-select-item-check',
                innerHTML: after(currentState).compute((current) => {
                  const selected = asArray(current);
                  return selected.includes(item.value.get()) ? checkedSvg : '';
                }),
              }),
              Span({ className: 'g-ui-select-item-label' }, item.label)
            )
          ),
          () => Div({ className: 'g-ui-select-empty', role: 'status' }, emptySearchMessage)
        )
      )
    )
  );
}
