# @web-ui/animated-tabs

Animated tabs with a sliding indicator.

## Install

```bash
npm install @web-ui/animated-tabs react
```

## Scope

This package only handles:

- active tab measurement
- indicator positioning and animation
- click and keyboard tab switching

It does not define label, icon, badge, or count UI. Callers render those.

## API

- `tabs`
- `active`
- `onChange`
- `renderTab`
- `variant`: `underline` or `pill`

## Example

```tsx
import { AnimatedTabs } from "@web-ui/animated-tabs";

const tabs = [
  { id: "all", ariaLabel: "All" },
  { id: "sent", ariaLabel: "Sent" }
] as const;

<AnimatedTabs
  tabs={tabs}
  active={active}
  onChange={setActive}
  renderTab={(tab, isActive) => <span>{tab.id}</span>}
/>;
```

## Publish Notes

This package is published as ESM and builds automatically during `npm pack` and `npm publish` via the `prepack` script.
