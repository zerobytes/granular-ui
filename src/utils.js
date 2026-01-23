import { Renderer, isSignal, isState, isStatePath, isComputed, resolve, computed, after } from 'granular';

function isReactive(value) {
  return isSignal(value) || isState(value) || isStatePath(value) || isComputed(value);
}

export function cx(...values) {
  const list = values.flat();
  const targets = list.filter(isReactive);
  const build = () =>
    list
      .map((v) => (typeof v === 'function' ? v() : resolve(v)))
      .filter(Boolean)
      .join(' ');
  if (!targets.length) return build();
  return after(targets).compute(build);
}

export function toPx(value) {
  if (value == null || value === '') return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

export function splitPropsChildren(args) {
  const props = {};
  const children = [];
  const isPropsObject = (value) =>
    !!value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !Renderer.isRenderable(value) &&
    !Renderer.isDomNode(value) &&
    !isSignal(value) &&
    !isState(value) &&
    !isStatePath(value) &&
    !isComputed(value);

  for (const arg of args) {
    if (isPropsObject(arg)) Object.assign(props, arg);
    else children.push(arg);
  }
  return { props: computed(props), children };
}

export function resolveValue(value) {
  return resolve(value);
}

export function resolveBool(value) {
  return !!resolve(value);
}

export function classVar(prefix, value, fallback) {
  const normalize = (v) => {
    const resolved = resolve(v);
    const finalValue = resolved == null || resolved === '' ? fallback : resolved;
    return finalValue == null || finalValue === '' ? '' : `${prefix}${finalValue}`;
  };
  if (isReactive(value)) {
    return after(value).compute((v) => normalize(v));
  }
  return normalize(value);
}

export function classFlag(name, value) {
  if (isReactive(value)) {
    return after(value).compute((v) => (resolve(v) ? name : ''));
  }
  return resolve(value) ? name : '';
}

export function classMap(value, map, fallback) {
  const getClass = (v) => map[v] || null;
  if (isReactive(value)) {
    return after(value).compute((v) => getClass(resolve(v ?? fallback)));
  }
  return getClass(resolve(value ?? fallback));
}
