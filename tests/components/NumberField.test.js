import { bootstrap, state } from '/granular/src/index.js';
import { NumberField } from '/granular-ui/src/components/NumberField.js';

const results = [];

function normalize(value) {
  return String(value ?? '').replace(/\u00A0/g, ' ').trim();
}

function assertEqual(actual, expected, message) {
  if (normalize(actual) !== normalize(expected)) {
    throw new Error(`${message}\nExpected: "${expected}"\nReceived: "${actual}"`);
  }
}

function logResult(name, status, details) {
  results.push({ name, status, details });
}

function nextFrame() {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    } else {
      setTimeout(resolve, 0);
    }
  });
}

function mountNumberField(props) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const valueState = props.valueState ?? state(props.value ?? '');
  const onChange = props.onChange ?? ((next) => valueState.set(next));

  bootstrap(() => NumberField({ ...props, value: valueState, onChange }), container);
  const input = container.querySelector('input');
  return { container, input, valueState, cleanup: () => container.remove() };
}

async function typeDigit(input, digit) {
  input.value = `${input.value}${digit}`;
  input.dispatchEvent(new InputEvent('input', { data: digit, inputType: 'insertText', bubbles: true }));
  await nextFrame();
}

async function backspace(input) {
  input.value = input.value.slice(0, -1);
  input.dispatchEvent(new InputEvent('input', { inputType: 'deleteContentBackward', bubbles: true }));
  await nextFrame();
}

async function testCurrencyProgression() {
  const { input, cleanup } = mountNumberField({
    value: '',
    format: 'currency',
    currency: 'BRL',
    locale: 'pt-BR',
    decimalSeparator: ',',
    decimalScale: 2,
    prefix: 'R$ ',
  });

  input.focus();
  await nextFrame();
  assertEqual(input.value, 'R$ 0,00', 'Currency should show formatted zero on focus.');

  await typeDigit(input, '1');
  assertEqual(input.value, 'R$ 0,01', 'Currency should shift digits right-to-left (1).');
  await typeDigit(input, '2');
  assertEqual(input.value, 'R$ 0,12', 'Currency should shift digits right-to-left (2).');
  await typeDigit(input, '3');
  assertEqual(input.value, 'R$ 1,23', 'Currency should shift digits right-to-left (3).');
  await typeDigit(input, '4');
  assertEqual(input.value, 'R$ 12,34', 'Currency should shift digits right-to-left (4).');

  cleanup();
}

async function testPercentProgression() {
  const { input, cleanup } = mountNumberField({
    value: '',
    format: 'percent',
    decimalSeparator: ',',
    decimalScale: 2,
  });

  input.focus();
  await nextFrame();
  assertEqual(input.value, '0,00%', 'Percent should show formatted zero on focus.');

  await typeDigit(input, '1');
  assertEqual(input.value, '0,01%', 'Percent should shift digits right-to-left (1).');
  await typeDigit(input, '2');
  assertEqual(input.value, '0,12%', 'Percent should shift digits right-to-left (2).');
  await typeDigit(input, '3');
  assertEqual(input.value, '1,23%', 'Percent should shift digits right-to-left (3).');

  cleanup();
}

async function testPlainProgression() {
  const { input, cleanup } = mountNumberField({
    value: '',
    decimalSeparator: ',',
    decimalScale: 2,
  });

  input.focus();
  await nextFrame();
  assertEqual(input.value, '0,00', 'Plain number should show formatted zero on focus.');

  await typeDigit(input, '1');
  assertEqual(input.value, '0,01', 'Plain number should shift digits right-to-left (1).');
  await typeDigit(input, '1');
  assertEqual(input.value, '0,11', 'Plain number should shift digits right-to-left (2).');
  await typeDigit(input, '1');
  assertEqual(input.value, '1,11', 'Plain number should shift digits right-to-left (3).');

  cleanup();
}

async function testBackspaceBehavior() {
  const { input, valueState, cleanup } = mountNumberField({
    format: 'currency',
    currency: 'BRL',
    locale: 'pt-BR',
    decimalSeparator: ',',
    decimalScale: 2,
    prefix: 'R$ ',
  });

  valueState.set(1230.45);
  await nextFrame();
  assertEqual(input.value, 'R$ 1.230,45', 'Currency should format initial value.');

  await backspace(input);
  assertEqual(input.value, 'R$ 123,04', 'Backspace should remove one digit from the right.');

  cleanup();
}

async function testValueStateUpdatesEveryDigit() {
  const externalValue = state(42);
  const receivedValues = [];

  const { input, cleanup } = mountNumberField({
    valueState: externalValue,
    min: 0,
    max: 100000,
    onChange: (next) => {
      receivedValues.push(next);
      externalValue.set(next);
    },
  });

  input.focus();
  await nextFrame();

  assertEqual(String(externalValue.get()), '42', 'Initial external value should be 42.');

  await typeDigit(input, '1');
  assertEqual(receivedValues.length, 1, 'onChange should be called after 1st digit.');
  assertEqual(String(externalValue.get()), '421', 'External value should be 421 after 1st digit.');

  await typeDigit(input, '2');
  assertEqual(receivedValues.length, 2, 'onChange should be called after 2nd digit.');
  assertEqual(String(externalValue.get()), '4212', 'External value should be 4212 after 2nd digit.');

  await typeDigit(input, '3');
  assertEqual(receivedValues.length, 3, 'onChange should be called after 3rd digit.');
  assertEqual(String(externalValue.get()), '42123', 'External value should be 42123 after 3rd digit.');

  cleanup();
}

async function testBlurClampBehavior() {
  const externalValue = state(42);
  const receivedValues = [];

  const { input, cleanup } = mountNumberField({
    valueState: externalValue,
    min: 0,
    max: 100,
    clampBehavior: 'blur',
    onChange: (next) => {
      receivedValues.push(next);
      externalValue.set(next);
    },
  });

  input.focus();
  await nextFrame();

  await typeDigit(input, '1');
  assertEqual(String(externalValue.get()), '421', 'After typing 1, value should be 421 (no clamp yet).');

  input.blur();
  await nextFrame();

  assertEqual(input.value, '100', 'After blur, input should be clamped to max (100).');
  assertEqual(String(externalValue.get()), '100', 'After blur, external value should be clamped to 100.');

  cleanup();
}

async function testBlurNoClamp() {
  const externalValue = state(42);

  const { input, cleanup } = mountNumberField({
    valueState: externalValue,
    min: 0,
    max: 100,
    clampBehavior: 'none',
    onChange: (next) => externalValue.set(next),
  });

  input.focus();
  await nextFrame();

  await typeDigit(input, '1');
  assertEqual(String(externalValue.get()), '421', 'Value should be 421.');

  input.blur();
  await nextFrame();

  assertEqual(input.value, '421', 'With clampBehavior: none, input should stay 421 after blur.');
  assertEqual(String(externalValue.get()), '421', 'With clampBehavior: none, external value should stay 421.');

  cleanup();
}

export async function runTests(targetEl) {
  const tests = [
    ['Currency progression', testCurrencyProgression],
    ['Percent progression', testPercentProgression],
    ['Plain progression', testPlainProgression],
    ['Backspace behavior', testBackspaceBehavior],
    ['Value state updates every digit', testValueStateUpdatesEveryDigit],
    ['Blur clamp behavior', testBlurClampBehavior],
    ['Blur no clamp', testBlurNoClamp],
  ];

  for (const [name, fn] of tests) {
    try {
      await fn();
      logResult(name, 'pass');
    } catch (err) {
      logResult(name, 'fail', err?.message ?? String(err));
    }
  }

  if (targetEl) {
    const list = document.createElement('ul');
    list.style.fontFamily = 'system-ui, sans-serif';
    list.style.lineHeight = '1.4';
    list.style.paddingLeft = '16px';
    results.forEach((result) => {
      const item = document.createElement('li');
      item.textContent = `${result.status === 'pass' ? '✅' : '❌'} ${result.name}`;
      if (result.status === 'fail') {
        const pre = document.createElement('pre');
        pre.textContent = result.details;
        pre.style.whiteSpace = 'pre-wrap';
        pre.style.marginTop = '6px';
        pre.style.color = '#b00020';
        item.appendChild(pre);
      }
      list.appendChild(item);
    });
    targetEl.appendChild(list);
  }

  if (typeof window !== 'undefined') {
    window.__numberFieldTestResults = results;
  }
  return results;
}