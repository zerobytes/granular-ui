import { cx, splitPropsChildren, classVar, resolveValue } from '../utils.js';
import { Div, Input, Span, when, after, state } from 'granular';

export function NumberField(...args) {
  const { props, rawProps } = splitPropsChildren(args, {
    size: 'md',
    step: 1,
    allowDecimal: true,
    allowNegative: true,
    clampBehavior: 'blur',
    hideControls: false,
    decimalSeparator: '.',
    format: null,
    prefix: '',
    suffix: '',
  });
  const {
    value,
    min,
    max,
    step,
    size,
    allowDecimal,
    allowNegative,
    decimalSeparator,
    decimalScale,
    clampBehavior,
    hideControls,
    format,
    locale,
    currency,
    formatOptions,
    prefix,
    suffix,
    leftSection,
    rightSection,
    className,
    inputProps,
    onChange: _onChange,
    onInput: _onInput,
    onBlur: _onBlur,
    onFocus: _onFocus,
    onKeyDown: _onKeyDown,
    ...rest
  } = props;
  const { onChange, onInput, onBlur, onFocus, onKeyDown } = rawProps;

  const currentState = state('');

  const escapeRegExp = (value) => String(value ?? '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const getScale = () => {
    const allowDec = !!resolveValue(allowDecimal);
    if (!allowDec) return 0;
    const resolved = resolveValue(decimalScale);
    if (resolved != null && resolved !== '' && Number.isFinite(Number(resolved))) return Math.max(0, Number(resolved));
    const fmt = resolveValue(format);
    if (fmt === 'currency' || fmt === 'percent') return 2;
    return 0;
  };

  const parseNumber = (raw) => {
    const sep = resolveValue(decimalSeparator) ?? '.';
    const rawValue = String(raw ?? '');
    if (!rawValue || rawValue === '-' || rawValue === sep || rawValue.endsWith(sep)) return null;
    const normalized = rawValue.replace(sep, '.');
    const num = Number(normalized);
    if (!Number.isFinite(num)) return null;
    return num;
  };

  const formatNumber = (num) => {
    const sep = resolveValue(decimalSeparator) ?? '.';
    const scale = getScale();
    const numeric = Number(num);
    if (!Number.isFinite(numeric)) return '';
    const sign = numeric < 0 ? '-' : '';
    const abs = Math.abs(numeric);
    let [int, dec = ''] = String(abs).split('.');
    if (scale > 0) {
      const trimmed = dec.slice(0, scale).padEnd(scale, '0');
      return `${sign}${int}${sep}${trimmed}`;
    }
    return `${sign}${int}`;
  };

  const formatWithIntl = (num, kind) => {
    try {
      const resolvedLocale = resolveValue(locale);
      const resolvedCurrency = resolveValue(currency) ?? 'USD';
      const options = resolveValue(formatOptions) ?? {};
      const scale = getScale();
      const style = kind === 'currency' ? 'currency' : 'decimal';
      const formatter = new Intl.NumberFormat(resolvedLocale, {
        style,
        currency: resolvedCurrency,
        ...(scale > 0 ? { minimumFractionDigits: scale, maximumFractionDigits: scale } : { maximumFractionDigits: 0 }),
        ...options,
      });
      return formatter.format(num);
    } catch {
      return formatNumber(num);
    }
  };

  const clampValue = (num) => {
    let next = num;
    const minValue = resolveValue(min);
    const maxValue = resolveValue(max);
    if (minValue != null && Number.isFinite(Number(minValue))) next = Math.max(next, Number(minValue));
    if (maxValue != null && Number.isFinite(Number(maxValue))) next = Math.min(next, Number(maxValue));
    if (!resolveValue(allowNegative) && next < 0) next = 0;
    return next;
  };

  const resolveSuffix = () => {
    const suffixValue = resolveValue(suffix) ?? '';
    const fmt = resolveValue(format);
    if (!suffixValue && fmt === 'percent') return '%';
    return suffixValue;
  };

  const buildVisual = (raw, sign, fmt) => {
    const prefixValue = resolveValue(prefix) ?? '';
    const suffixValue = resolveSuffix();
    const normalizedRaw = String(raw ?? '').replace(/\u00A0/g, ' ');
    const normalizedPrefix = String(prefixValue ?? '').replace(/\u00A0/g, ' ');
    const normalizedSuffix = String(suffixValue ?? '').replace(/\u00A0/g, ' ');
    const hasPrefix = normalizedPrefix && normalizedRaw.startsWith(normalizedPrefix);
    const hasSuffix = normalizedSuffix && normalizedRaw.endsWith(normalizedSuffix);
    const finalPrefix = hasPrefix ? '' : prefixValue;
    const finalSuffix = hasSuffix ? '' : suffixValue;
    return `${sign ?? ''}${finalPrefix}${raw}${finalSuffix}`;
  };

  const makeSanitizedFromDigits = (digitsValue, sign) => {
    const scale = getScale();
    const sep = resolveValue(decimalSeparator) ?? '.';
    const digits = String(digitsValue ?? '').replace(/\D/g, '');
    const baseDigits = digits || '0';
    const padded = scale > 0 ? baseDigits.padStart(scale + 1, '0') : baseDigits;
    const rawInt = scale > 0 ? padded.slice(0, -scale) : padded;
    const intPart = rawInt.replace(/^0+(?=\d)/, '') || '0';
    const decPart = scale > 0 ? padded.slice(-scale) : '';
    const sanitized = scale > 0 ? `${intPart}${sep}${decPart}` : intPart;
    return `${sign ?? ''}${sanitized}`;
  };

  const stripAffixes = (raw) => {
    const prefixValue = resolveValue(prefix) ?? '';
    const suffixValue = resolveSuffix();
    let out = String(raw ?? '');
    const normalizedPrefix = String(prefixValue ?? '').replace(/\u00A0/g, ' ');
    const normalizedSuffix = String(suffixValue ?? '').replace(/\u00A0/g, ' ');
    if (normalizedPrefix) {
      const normalizedOut = out.replace(/\u00A0/g, ' ');
      if (normalizedOut.startsWith(normalizedPrefix)) out = out.slice(prefixValue.length);
    }
    if (normalizedSuffix) {
      const normalizedOut = out.replace(/\u00A0/g, ' ');
      if (normalizedOut.endsWith(normalizedSuffix)) out = out.slice(0, -suffixValue.length);
    }
    return out;
  };

  const sanitizeFromInput = (rawInput) => {
    const allowNeg = !!resolveValue(allowNegative);
    const body = stripAffixes(rawInput);
    const sign = allowNeg && body.includes('-') ? '-' : '';
    const digits = body.replace(/\D/g, '');
    let sanitized = makeSanitizedFromDigits(digits, sign);
    if (resolveValue(clampBehavior) === 'strict') {
      const parsed = parseNumber(sanitized);
      if (parsed != null) {
        const clamped = clampValue(parsed);
        const clampedSign = clamped < 0 ? '-' : '';
        sanitized = `${clampedSign}${formatNumber(Math.abs(clamped))}`;
      }
    }
    return sanitized;
  };

  const normalizeIncoming = (next) => {
    if (next == null || next === '') return makeSanitizedFromDigits('', '');
    if (typeof next === 'number' && Number.isFinite(next)) {
      const clamped = resolveValue(clampBehavior) === 'strict' ? clampValue(next) : next;
      const sign = clamped < 0 ? '-' : '';
      return `${sign}${formatNumber(Math.abs(clamped))}`;
    }
    const inputText = stripAffixes(next);
    const sep = resolveValue(decimalSeparator) ?? '.';
    const allowNeg = !!resolveValue(allowNegative);
    const sign = allowNeg && String(inputText).includes('-') ? '-' : '';
    const filtered = String(inputText ?? '').replace(new RegExp(`[^0-9${escapeRegExp(sep)}]`, 'g'), '');
    const parsed = parseNumber(`${sign}${filtered}`);
    if (parsed != null) {
      const clamped = resolveValue(clampBehavior) === 'strict' ? clampValue(parsed) : parsed;
      const clampedSign = clamped < 0 ? '-' : '';
      return `${clampedSign}${formatNumber(Math.abs(clamped))}`;
    }
    return sanitizeFromInput(next);
  };

  let lastExternalValue = undefined;
  const updateFromExternal = (next) => {
    const resolved = resolveValue(next);
    if (resolved === undefined) return;
    const normalized = normalizeIncoming(resolved);
    if (normalized === currentState.get()) return;
    lastExternalValue = normalized;
    currentState.set(normalized);
  };

  updateFromExternal(value);
  after(value).change(updateFromExternal);

  after(currentState).change((next) => {
    if (next === lastExternalValue) {
      lastExternalValue = undefined;
      return;
    }
    lastExternalValue = undefined;
    const parsed = parseNumber(next);
    if (parsed == null) {
      onChange?.(next ?? '');
      return;
    }
    onChange?.(parsed);
  });

  const hasRightSection = after(rightSection).compute((next) => next != null && next !== false);
  const showControls = after(hideControls, hasRightSection).compute(([nextHidden, nextRight]) =>
    !resolveValue(nextHidden) && !nextRight
  );
  const inputMode = after(allowDecimal).compute((next) => (resolveValue(next) ? 'decimal' : 'numeric'));

  const inputFormat = after(
    format,
    prefix,
    suffix,
    allowDecimal,
    allowNegative,
    decimalSeparator,
    decimalScale,
    clampBehavior,
    min,
    max,
    locale,
    currency,
    formatOptions
  ).compute(() => ({
    mode: 'both',
    format: (raw) => {
      const sanitized = sanitizeFromInput(raw);
      const fmt = resolveValue(format);
      const allowNeg = !!resolveValue(allowNegative);
      const sign = allowNeg && sanitized.startsWith('-') ? '-' : '';
      const parsed = parseNumber(sanitized);
      let visual = sanitized.replace(sign, '');
      if (parsed != null) {
        const abs = Math.abs(parsed);
        if (typeof fmt === 'function') {
          try {
            visual = fmt(abs);
          } catch {
            visual = formatNumber(abs);
          }
        } else if (fmt === 'currency') {
          visual = formatWithIntl(abs, 'currency');
        } else if (fmt === 'decimal') {
          const resolvedLocale = resolveValue(locale);
          const resolvedOptions = resolveValue(formatOptions);
          visual = resolvedLocale || resolvedOptions ? formatWithIntl(abs, 'decimal') : formatNumber(abs);
        } else if (fmt === 'percent') {
          visual = formatNumber(abs);
        } else {
          visual = formatNumber(abs);
        }
      }
      return { value: sanitized, raw: sanitized, visual: buildVisual(visual, sign, fmt) };
    },
  }));

  const stepBy = (direction) => {
    const current = parseNumber(currentState.get());
    const delta = Number(resolveValue(step) ?? 1);
    const base = current == null ? 0 : current;
    const next = clampValue(base + delta * direction);
    currentState.set(formatNumber(next));
  };

  const setCaretToEnd = (target) => {
    if (!target || typeof target.setSelectionRange !== 'function') return;
    const setToEnd = () => {
      try {
        const end = String(target.value ?? '').length;
        target.setSelectionRange(end, end);
      } catch { }
    };
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(setToEnd);
    } else {
      setToEnd();
    }
  };

  const handleInput = (ev) => {
    onInput?.(ev);
    const target = ev?.target;
    if (!target) return;
    setCaretToEnd(target);
  };

  const handleBlur = (ev) => {
    onBlur?.(ev);
    if (resolveValue(clampBehavior) !== 'blur') return;
    const parsed = parseNumber(currentState.get());
    if (parsed == null) return;
    const clamped = clampValue(parsed);
    currentState.set(formatNumber(clamped));
  };

  const handleFocus = (ev) => {
    onFocus?.(ev);
    setCaretToEnd(ev?.target);
  };

  const handleKeyDown = (ev) => {
    onKeyDown?.(ev);
    const target = ev?.target;
    if (!target) return;
    const prefixValue = resolveValue(prefix) ?? '';
    const suffixValue = resolveSuffix();
    if (suffixValue && typeof target.selectionEnd === 'number') {
      target.selectionEnd = Math.min(target.selectionEnd, String(target.value ?? '').length - suffixValue.length);
    }
    if (prefixValue && typeof target.selectionStart === 'number') {
      target.selectionStart = Math.max(target.selectionStart, prefixValue.length);
    }
  };

  return Div(
    { ...rest, className: cx('g-ui-number-field', className) },
    Div(
      { className: cx('g-ui-input-wrapper', classVar('g-ui-input-size-', size, 'md')) },
      when(leftSection, () => Div({ className: 'g-ui-input-section' }, leftSection)),
      Input({
        type: 'text',
        inputMode: when(inputProps?.inputMode,
          () => inputProps.get().inputMode,
          () => inputMode
        ),
        ...inputProps,
        className: cx('g-ui-input g-ui-input-number', inputProps?.className),
        value: currentState,
        format: inputFormat,
        onInput: handleInput,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
      }),
      when(hasRightSection, () => Div({ className: 'g-ui-input-section' }, rightSection)),
      when(showControls, () =>
        Div(
          { className: 'g-ui-number-field-controls' },
          Span({ className: 'g-ui-number-field-control', onClick: () => stepBy(1) }, '+'),
          Span({ className: 'g-ui-number-field-control', onClick: () => stepBy(-1) }, '−')
        )
      )
    )
  );
}