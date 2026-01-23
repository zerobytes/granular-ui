import { state } from 'granular';

export function useDisclosure(initial = false) {
  const opened = state(!!initial);
  return [
    opened,
    {
      open: () => opened.set(true),
      close: () => opened.set(false),
      toggle: () => opened.set(!opened.get()),
    },
  ];
}
