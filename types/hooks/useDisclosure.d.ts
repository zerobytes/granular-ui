export function useDisclosure(initial?: boolean): (import("@granularjs/core").StateCore<boolean> | {
    open: () => void;
    close: () => void;
    toggle: () => void;
})[];
