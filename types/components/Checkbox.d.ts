/**
 * @typedef {import('../types').ToggleProps & {
 *   indeterminate?: import('../types').Reactive<boolean>,
 *   description?: import('../types').Reactive<string>,
 *   inputProps?: Record<string, unknown>,
 * }} CheckboxProps
 *
 * @param {CheckboxProps} args
 */
export function Checkbox(...args: CheckboxProps): import("@granularjs/core").ElementNode;
export type CheckboxProps = import("../types").ToggleProps & {
    indeterminate?: import("../types").Reactive<boolean>;
    description?: import("../types").Reactive<string>;
    inputProps?: Record<string, unknown>;
};
