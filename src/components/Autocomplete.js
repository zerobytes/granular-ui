import { Div, state, after, list, when, resolve } from '@granularjs/core';
import { cx, splitPropsChildren, resolveValue, classFlag, getDropdownPlacement } from '../utils.js';
import { TextInput } from './TextInput.js';
import { ScrollArea } from './ScrollArea.js';

function getByPath(obj, path) {
  if (path == null || path === '') return obj;
  const keys = String(path).trim().split('.');
  let v = obj;
  for (const k of keys) v = v?.[k];
  return v;
}

function defaultFilter(query, item, getLabel) {
  const label = getLabel(item);
  return String(label ?? '').toLowerCase().includes(String(query ?? '').toLowerCase());
}

export function Autocomplete(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    data: [],
    size: 'md',
    valuePath: 'value',
    labelPath: 'label',
  });
  const {
    data,
    value,
    size,
    valuePath,
    labelPath,
    filter,
    placeholder,
    label,
    description,
    error,
    leftSection,
    rightSection,
    className,
    inputClassName,
    disabled,
    ...rest
  } = props;
  const { onChange, renderItem } = rawProps;

  const opened = state(false);
  const placement = state('bottom');
  const rootNode = state(null);
  const query = state('');
  const currentValue = state(resolveValue(value));

  after(value).change((next) => {
    const resolved = resolveValue(next);
    if (resolved === currentValue.get()) return;
    currentValue.set(resolved);
  });

  let outsideCleanup = null;
  after(opened).change((next) => {
    if (outsideCleanup) { outsideCleanup(); outsideCleanup = null; }
    if (!next) return;
    const mouseHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      close();
    };
    const focusHandler = (ev) => {
      const root = rootNode.get();
      if (!root || root.contains(ev.target)) return;
      close();
    };
    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('focusin', focusHandler);
    outsideCleanup = () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('focusin', focusHandler);
    };
  });

  const dataResolved = after(data).compute((d) => (Array.isArray(d) ? d : []));

  const selectedItem = after(dataResolved, currentValue, valuePath).compute(([items, val, vPath]) => {
    if (val === undefined || val === null) return null;
    const getVal = (it) => (vPath == null || vPath === '' ? it : getByPath(it, vPath));
    return items.find((it) => getVal(it) === val) ?? null;
  });

  const displayText = after(selectedItem, opened, query, labelPath).compute(([sel, isOpen, q, lPath]) => {
    const getLabelCur = (item) =>
      lPath == null || lPath === '' ? String(item ?? '') : String(getByPath(item, lPath) ?? '');
    if (isOpen) return q ?? '';
    return sel ? getLabelCur(sel) : '';
  });

  const filteredItems = after(dataResolved, query, filter, labelPath).compute(([items, q, filterVal, lPath]) => {
    const getLabelCur = (item) =>
      lPath == null || lPath === '' ? String(item ?? '') : String(getByPath(item, lPath) ?? '');
    const fn = resolveValue(filterVal) ?? defaultFilter;
    return items.filter((item) => fn(q, item, getLabelCur));
  });

  let lastSelectedAt = 0;

  const selectItem = (item) => {
    const vPath = resolveValue(valuePath);
    const val = vPath == null || vPath === '' ? item : getByPath(item, vPath);
    currentValue.set(val);
    query.set('');
    opened.set(false);
    onChange?.(val);
    lastSelectedAt = Date.now();
  };

  let openedAt = 0;

  const open = () => {
    if (resolveValue(disabled)) return;
    if (opened.get()) return;
    if (Date.now() - lastSelectedAt < 200) return;
    placement.set(getDropdownPlacement(rootNode.get()));
    opened.set(true);
    openedAt = Date.now();
    const sel = selectedItem.get();
    const lPath = resolveValue(labelPath);
    const getLabelCur = (item) =>
      lPath == null || lPath === '' ? String(item ?? '') : String(getByPath(item, lPath) ?? '');
    query.set(sel ? getLabelCur(sel) : '');
  };
  const close = () => {
    opened.set(false);
    const sel = selectedItem.get();
    const lPath = resolveValue(labelPath);
    const getLabelCur = (item) =>
      lPath == null || lPath === '' ? String(item ?? '') : String(getByPath(item, lPath) ?? '');
    query.set(sel ? getLabelCur(sel) : '');
  };

  const { onChange: _omitOnChange, ...restForInput } = rest;
  const inputProps = {
    ...restForInput,
    size,
    label,
    description,
    error,
    leftSection,
    rightSection,
    placeholder: resolveValue(placeholder) ?? undefined,
    disabled,
    value: displayText,
    onInput: (ev) => query.set(ev?.target?.value ?? ''),
    onFocus: () => open(),
    onClick: () => {
      if (opened.get()) {
        if (Date.now() - openedAt < 200) return;
        close();
      } else {
        open();
      }
    },
  };

  const renderOption = (item) => {
    const plain = resolve(item);
    const vPath = resolveValue(valuePath);
    const lPath = resolveValue(labelPath);
    const itemVal = vPath == null || vPath === '' ? plain : getByPath(plain, vPath);
    const itemLabel = lPath == null || lPath === '' ? String(plain ?? '') : String(getByPath(plain, lPath) ?? '');

    const activeClass = after(currentValue).compute((v) =>
      itemVal === v ? 'g-ui-autocomplete-item-active' : ''
    );

    const content = (renderItem && typeof renderItem === 'function')
      ? renderItem(plain)
      : null;

    return Div(
      {
        className: cx('g-ui-autocomplete-item', activeClass),
        onClick: () => selectItem(plain),
        role: 'option',
      },
      content != null ? content : itemLabel
    );
  };

  return Div(
    { node: rootNode, className: cx('g-ui-autocomplete', className, classFlag('g-ui-autocomplete-disabled', disabled)) },
    TextInput({
      ...inputProps,
      className: cx('g-ui-autocomplete-input-wrapper', inputProps.className),
      inputClassName: cx('g-ui-autocomplete-input', inputClassName),
    }),
    when(opened, () =>
      Div(
        {
          className: cx('g-ui-autocomplete-dropdown', after(placement).compute((p) => p === 'top' ? 'g-ui-autocomplete-dropdown-top' : '')),
          role: 'listbox',
          onMouseDown: (ev) => ev.preventDefault(),
        },
        ScrollArea(
          { className: 'g-ui-autocomplete-list', style: { maxHeight: '240px' } },
          list(filteredItems, (item) => renderOption(item))
        )
      )
    )
  );
}
