/**
 * @typedef {import('../types').BaseUIProps & {
 *   variant?: import('../types').Reactive<import('../types').Variant>,
 *   color?: import('../types').Reactive<import('../types').Color>,
 *   size?: import('../types').Reactive<import('../types').Size>,
 *   fullWidth?: import('../types').Reactive<boolean>,
 *   loading?: import('../types').Reactive<boolean>,
 *   disabled?: import('../types').Reactive<boolean>,
 *   leftSection?: import('../types').Child,
 *   rightSection?: import('../types').Child,
 *   justify?: import('../types').Reactive<'left'|'center'|'right'|'space-between'>,
 *   onClick?: (event: MouseEvent) => void,
 * }} ButtonProps
 *
 * @param {ButtonProps | import('../types').Child} args
 */
export function Button(...args: ButtonProps | import("../types").Child): import("@granularjs/core").ElementNode;
export type ButtonProps = import("../types").BaseUIProps & {
    variant?: import("../types").Reactive<import("../types").Variant>;
    color?: import("../types").Reactive<import("../types").Color>;
    size?: import("../types").Reactive<import("../types").Size>;
    fullWidth?: import("../types").Reactive<boolean>;
    loading?: import("../types").Reactive<boolean>;
    disabled?: import("../types").Reactive<boolean>;
    leftSection?: import("../types").Child;
    rightSection?: import("../types").Child;
    justify?: import("../types").Reactive<"left" | "center" | "right" | "space-between">;
    onClick?: (event: MouseEvent) => void;
};
