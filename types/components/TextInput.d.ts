export function TextInput(...args: any[]): import("@granularjs/core").ElementNode;
export type TextInputProps = import("../types").InputProps<string> & {
    leftSection?: import("../types").Child;
    rightSection?: import("../types").Child;
    type?: "text" | "email" | "url" | "tel" | "number" | "search";
    autoFocus?: boolean;
    maxLength?: import("../types").Reactive<number>;
};
