export function isReactive(value: any): any;
export function cx(...values: any[]): string | import("@granularjs/core").ComputedCore<string>;
export function toPx(value: any): any;
export function splitPropsChildren(args: any, defaults: any): {
    props: {};
    rawProps: {};
    children: any[];
};
export function resolveValue(value: any): any;
export function resolveBool(value: any): boolean;
export function classVar(prefix: any, value: any, fallback: any, options: any): string | import("@granularjs/core").ComputedCore<string>;
export function classFlag(name: any, value: any): any;
export function getDropdownPlacement(rootEl: any, dropdownMaxHeight?: number): "bottom" | "top";
export function classMap(value: any, map: any, fallback: any): any;
