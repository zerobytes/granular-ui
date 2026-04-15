import { Div, state, after, list, when } from '@granularjs/core';
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

  const selectItem = (item) => {
    const vPath = resolveValue(valuePath);
    const val = vPath == null || vPath === '' ? item : getByPath(item, vPath);
    currentValue.set(val);
    query.set('');
    opened.set(false);
    onChange?.(val);
  };

  const open = () => {
    if (resolveValue(disabled)) return;
    placement.set(getDropdownPlacement(rootNode.get()));
    opened.set(true);
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
    onFocus: open,
    onClick: open,
    onBlur: () => setTimeout(() => close(), 150),
  };

  const getValueForItem = (item) => {
    const vPath = resolveValue(valuePath);
    return vPath == null || vPath === '' ? item : getByPath(item, vPath);
  };

  const itemActiveClass = (item) =>
    after(currentValue, valuePath).compute(([v, vPath]) => {
      const getVal = (it) => (vPath == null || vPath === '' ? it : getByPath(it, vPath));
      return getVal(item) === v ? 'g-ui-autocomplete-item-active' : '';
    });

  const renderOption = (item) => {
    if (renderItem && typeof renderItem === 'function') {
      const node = renderItem(item);
      if (node != null)
        return Div(
          {
            className: cx('g-ui-autocomplete-item', itemActiveClass(item)),
            onClick: () => selectItem(item),
            role: 'option',
          },
          node
        );
    }
    return Div(
      {
        className: cx('g-ui-autocomplete-item', itemActiveClass(item)),
        onClick: () => selectItem(item),
        role: 'option',
      },
      after(labelPath).compute((lPath) =>
        lPath == null || lPath === '' ? String(item ?? '') : String(getByPath(item, lPath) ?? '')
      )
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
        },
        ScrollArea(
          { className: 'g-ui-autocomplete-list', style: { maxHeight: '240px' } },
          list(filteredItems, (item) => renderOption(item))
        )
      )
    )
  );
}
