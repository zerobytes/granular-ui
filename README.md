# Granular UI

Modern UI components for `granular`, inspired by Mantine, built for a no-build, DOM-first workflow.

## Quick Start

```js
import { Container, Stack, Title, Text, Button, useDisclosure, Modal } from '@granular/ui';

const [opened, { open, close }] = useDisclosure(false);

const App = () =>
  Container(
    Stack({ gap: 16 },
      Title({ order: 2 }, 'Granular UI'),
      Text({ dimmed: true }, 'Fast, clean, and modern.'),
      Button({ onClick: open }, 'Open modal'),
      Modal({ opened, onClose: close, title: 'Hello' },
        Text('This is a modal.')
      )
    )
  );
```

## Components

- `Button`
- `Text`
- `Title`
- `Container`
- `Stack`
- `Group`
- `Card`
- `Badge`
- `TextInput`
- `Textarea`
- `NumberInput`
- `Modal`
- `Loading`
- `Checkbox`
- `Switch`
- `Select`
- `Tabs`
- `Table`
- `Accordion`
- `Tooltip`
- `Menu`
- `Drawer`
- `Notification`
- `Divider`
- `Paper`
- `Alert`
- `Avatar`
- `Kbd`
- `Code`
- `Blockquote`
- `SimpleGrid`
- `List`
- `Anchor`
- `Image`
- `Progress`
- `Slider`
- `Skeleton`
- `Chip`
- `SegmentedControl`
- `Pagination`
- `Radio`
- `RadioGroup`
- `Breadcrumbs`
- `Center`
- `Space`
- `Collapse`
- `ActionIcon`
- `Popover`
- `HoverCard`
- `Affix`
- `Fieldset`
- `AppBar`
- `Sidebar`
- `Timeline`
- `Stepper`
- `Rating`
- `Tag`
- `Calendar`
- `MultiSelect`
- `ToastStack`
- `DatePicker`
- `Notifications`
- `RangeSlider`
- `DateInput`
- `NumberField`
- `Popper`
- `PasswordInput`
- `SearchInput`
- `CopyButton`
- `ProgressRing`
- `Toast`
- `SelectSearch`
- `SwitchGroup`
- `RangePicker`
- `Flex`
- `NavLink`
- `Indicator`
- `Burger`
- `LoadingOverlay`
- `Grid`
- `Col`
- `ScrollArea`
- `PinInput`
- `CheckboxGroup`
- `AvatarGroup`
- `BadgeGroup`

## Hooks

- `useDisclosure`
