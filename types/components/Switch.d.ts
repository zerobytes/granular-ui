/**
 * @typedef {import('../types').ToggleProps & {
 *   value?: import('../types').Reactive<string>,
 *   name?: import('../types').Reactive<string>,
 *   inputProps?: Record<string, unknown>,
 * }} SwitchProps
 *
 * @param {SwitchProps} args
 */
export function Switch(...args: SwitchProps): import("@granularjs/core").ElementNode;
export type SwitchProps = import("../types").ToggleProps & {
    value?: import("../types").Reactive<string>;
    name?: import("../types").Reactive<string>;
    inputProps?: Record<string, unknown>;
};
