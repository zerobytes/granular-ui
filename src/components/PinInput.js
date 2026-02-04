import { Div, Input, after, state, when } from 'granular';
import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';

export function PinInput(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    length: 4,
    size: 'md',
    type: 'alphanumeric',
    mask: false,
    placeholder: '○',
    disabled: false,
    error: false,
    oneTimeCode: false,
  });

  const {
    length,
    value,
    size,
    type,
    mask,
    placeholder,
    disabled,
    error,
    oneTimeCode,
    className,
    ...rest
  } = props;

  const { onChange, onComplete } = rawProps;

  const currentLength = state(resolveValue(length) ?? 4);
  const getLength = () => currentLength.get();

  after(length).change((next) => {
    const newLen = resolveValue(next) ?? 4;
    const oldLen = currentLength.get();
    if (newLen === oldLen) return;
    currentLength.set(newLen);
    const currentValues = currentState.get();
    const currentNodes = inputNodes.get();
    currentState.set(Array.from({ length: newLen }, (_, i) => currentValues[i] ?? ''));
    inputNodes.set(Array.from({ length: newLen }, (_, i) => currentNodes[i] ?? null));
  });

  const inputNodes = state(Array.from({ length: getLength() }, () => null));

  const currentState = state(
    Array.from({ length: getLength() }, (_, i) => {
      const initial = resolveValue(value);
      if (typeof initial === 'string') return initial[i] ?? '';
      if (Array.isArray(initial)) return initial[i] ?? '';
      return '';
    })
  );

  after(value).change((next) => {
    if (next == null) return;
    const len = getLength();
    if (typeof next === 'string') {
      currentState.set(Array.from({ length: len }, (_, i) => next[i] ?? ''));
    } else if (Array.isArray(next)) {
      currentState.set(Array.from({ length: len }, (_, i) => next[i] ?? ''));
    }
  });

  const getValueString = () => currentState.get().join('');

  const setValue = (next) => {
    currentState.set(next);
    const str = next.join('');
    onChange?.(str);
    if (next.every((v) => v !== '') && next.length === getLength()) {
      onComplete?.(str);
    }
  };

  const focusInput = (index) => {
    const len = getLength();
    const nodes = inputNodes.get();
    if (index >= 0 && index < len && nodes[index]) {
      nodes[index].focus();
      nodes[index].select();
    }
  };

  const getTypeRegex = () => {
    const t = resolveValue(type);
    if (t === 'number') return /^[0-9]$/;
    if (t instanceof RegExp) return t;
    return /^[a-zA-Z0-9]$/;
  };

  const handleInput = (idx, ev) => {
    const inputValue = ev.target.value;
    const regex = getTypeRegex();

    if (inputValue.length > 1) {
      handlePaste(idx, inputValue);
      return;
    }

    if (inputValue && !regex.test(inputValue)) {
      ev.target.value = currentState.get()[idx] ?? '';
      return;
    }

    const current = currentState.get().slice();
    current[idx] = inputValue;
    setValue(current);

    if (inputValue && idx < getLength() - 1) {
      focusInput(idx + 1);
    }
  };

  const handlePaste = (startIdx, pastedValue) => {
    const regex = getTypeRegex();
    const chars = pastedValue.split('').filter((c) => regex.test(c));
    const current = currentState.get().slice();
    const len = getLength();

    chars.forEach((char, i) => {
      const targetIdx = startIdx + i;
      if (targetIdx < len) {
        current[targetIdx] = char;
      }
    });

    setValue(current);

    const nextEmpty = current.findIndex((v, i) => i >= startIdx && v === '');
    if (nextEmpty >= 0) {
      focusInput(nextEmpty);
    } else {
      focusInput(Math.min(startIdx + chars.length, len - 1));
    }
  };

  const handleKeyDown = (idx, ev) => {
    if (ev.key === 'Backspace') {
      const current = currentState.get().slice();
      if (current[idx] === '' && idx > 0) {
        ev.preventDefault();
        current[idx - 1] = '';
        setValue(current);
        focusInput(idx - 1);
      } else if (current[idx] !== '') {
        current[idx] = '';
        setValue(current);
      }
    } else if (ev.key === 'ArrowLeft' && idx > 0) {
      ev.preventDefault();
      focusInput(idx - 1);
    } else if (ev.key === 'ArrowRight' && idx < getLength() - 1) {
      ev.preventDefault();
      focusInput(idx + 1);
    }
  };

  const handleFocus = (idx, ev) => {
    ev.target.select();
  };

  const handleContainerClick = () => {
    const current = currentState.get();
    const firstEmpty = current.findIndex((v) => v === '');
    if (firstEmpty >= 0) {
      focusInput(firstEmpty);
    } else {
      focusInput(current.length - 1);
    }
  };

  const inputType = after(mask).compute((m) => (resolveValue(m) ? 'password' : 'text'));
  const inputMode = after(type).compute((t) => (resolveValue(t) === 'number' ? 'numeric' : 'text'));
  const autoComplete = after(oneTimeCode).compute((o) => (resolveValue(o) ? 'one-time-code' : 'off'));
  const isDisabled = after(disabled).compute((d) => !!resolveValue(d));
  const hasError = after(error).compute((e) => !!resolveValue(e));

  const indices = after(currentLength).compute((len) =>
    Array.from({ length: len }, (_, i) => i)
  );

  const renderInput = (idx) =>
    Input({
      className: cx(
        'g-ui-pin-input-field',
        when(hasError, () => 'g-ui-pin-input-error')
      ),
      type: inputType,
      inputMode,
      autocomplete: autoComplete,
      maxLength: 2,
      placeholder: when(isDisabled, () => '', () => placeholder),
      disabled: isDisabled,
      value: after(currentState).compute(() => currentState.get()[idx] ?? ''),
      node: inputNodes[idx],
      onInput: (ev) => handleInput(idx, ev),
      onKeyDown: (ev) => handleKeyDown(idx, ev),
      onFocus: (ev) => handleFocus(idx, ev),
    });

  return Div(
    {
      ...rest,
      className: cx(
        'g-ui-pin-input',
        classVar('g-ui-input-size-', size, 'md'),
        className
      ),
      onClick: handleContainerClick,
    },
    Div(
      { className: 'g-ui-pin-input-wrapper' },
      indices.map(renderInput)
    )
  );
}
