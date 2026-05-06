/**
 * Shared TypeScript types for @granularjs/ui components.
 *
 * Re-exports the core Reactive<T> contract and provides component-level
 * prop interfaces that all granular-ui components extend.
 *
 * Usage in a JS component (JSDoc):
 *   /\*\*
 *    * @param {import('../types').BaseUIProps & { variant?: import('../types').Reactive<'filled'|'outline'> }} props
 *    * @param {...import('../types').Child} children
 *    \*\/
 */

/**
 * Minimal structural definitions of the @granularjs/core reactive primitives
 * needed for component prop typing. These mirror the public types exported
 * from @granularjs/core and exist locally so granular-ui's type build does
 * not require @granularjs/core to be installed.
 */
export interface Signal<T> {
  get(): T;
  set(next: T, force?: boolean): boolean;
  subscribe(fn: (next: T, prev: T) => void): () => void;
}

export interface Computed<T> {
  get(): T;
  subscribe(fn: (next: T, prev: T) => void): () => void;
  dispose?(): void;
}

export interface State<T> {
  get(p?: string): T;
  set(value: T): void;
  set(path: string, value: unknown): void;
  subscribe(fn: (next: T, prev: T) => void): () => void;
}

export type Reactive<T> = T | Signal<T> | State<T> | Computed<T>;
export type MaybeReactive<T> = Reactive<T>;
export type UnwrapReactive<T> =
  T extends Signal<infer V> ? V :
  T extends State<infer V> ? V :
  T extends Computed<infer V> ? V :
  T;

export type ReactiveSignal<T> = Signal<T>;
export type ReactiveState<T> = State<T>;
export type ReactiveComputed<T> = Computed<T>;

export interface Renderable {
  mountInto(parent: Node, beforeNode: Node | null): void;
  unmount(): void;
}

export type Child =
  | string | number | boolean | null | undefined
  | Node | Renderable
  | Signal<unknown> | State<unknown> | Computed<unknown>
  | Child[];

export type Children = Child | Child[];

export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Reactive<string | number | null | undefined | false>
  | ClassValue[]
  | { [key: string]: Reactive<unknown> | unknown };

export type StyleValue =
  | string
  | { [key: string]: Reactive<string | number | null | undefined> | string | number | null | undefined };

export interface BaseUIProps {
  id?: Reactive<string>;
  className?: ClassValue;
  style?: StyleValue;
  hidden?: Reactive<boolean>;
  ['data-testid']?: Reactive<string>;
  ['aria-label']?: Reactive<string>;
}

export type Color =
  | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'indigo' | 'violet' | 'pink'
  | (string & {});

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});

export type Variant = 'filled' | 'outline' | 'light' | 'subtle' | 'transparent' | 'default' | 'gradient' | (string & {});

export interface InputProps<T = string> extends BaseUIProps {
  value?: Reactive<T>;
  defaultValue?: T;
  onChange?: (value: T) => void;
  onInput?: (value: T) => void;
  disabled?: Reactive<boolean>;
  readOnly?: Reactive<boolean>;
  required?: Reactive<boolean>;
  name?: Reactive<string>;
  placeholder?: Reactive<string>;
  size?: Reactive<Size>;
  label?: Reactive<string>;
  description?: Reactive<string>;
  error?: Reactive<string | boolean>;
}

export interface ToggleProps extends BaseUIProps {
  checked?: Reactive<boolean>;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: Reactive<boolean>;
  label?: Reactive<string>;
  size?: Reactive<Size>;
  color?: Reactive<Color>;
}
