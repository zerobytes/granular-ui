/**
 * @typedef {import('../types').BaseUIProps & {
 *   opened?: import('../types').Reactive<boolean>,
 *   onClose?: () => void,
 *   title?: import('../types').Child,
 *   size?: import('../types').Reactive<import('../types').Size | 'auto' | 'fullscreen'>,
 *   centered?: import('../types').Reactive<boolean>,
 *   overlay?: import('../types').Reactive<'normal' | 'subtle' | 'none'>,
 *   closeOnEscape?: boolean,
 *   closeOnClickOutside?: boolean,
 *   withCloseButton?: import('../types').Reactive<boolean>,
 * }} ModalProps
 *
 * @param {ModalProps | import('../types').Child} args
 */
export function Modal(...args: ModalProps | import("../types").Child): import("@granularjs/core").WhenNode;
export type ModalProps = import("../types").BaseUIProps & {
    opened?: import("../types").Reactive<boolean>;
    onClose?: () => void;
    title?: import("../types").Child;
    size?: import("../types").Reactive<import("../types").Size | "auto" | "fullscreen">;
    centered?: import("../types").Reactive<boolean>;
    overlay?: import("../types").Reactive<"normal" | "subtle" | "none">;
    closeOnEscape?: boolean;
    closeOnClickOutside?: boolean;
    withCloseButton?: import("../types").Reactive<boolean>;
};
