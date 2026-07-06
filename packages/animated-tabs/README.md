# @stemui/animated-tabs

Animated tabs with a sliding indicator.

## Install

```bash
npm install @stemui/animated-tabs react
```

## Scope

This package only handles:

- active tab measurement
- indicator positioning and animation
- click and keyboard tab switching

It does not define label, icon, badge, or count UI. Callers render those.

## API

- `tabs`: tab data array. Each item supports:
  - `id`
  - `ariaLabel`
  - `disabled`
- `active`: current active tab id
- `onChange`: called with the next tab id
- `renderTab`: render function for each tab
- `variant`: `underline` or `pill`
- `scrollable`: enables horizontal overflow on the underline list
- `className`: root container class
- `listClassName`: tab list class
- `tabClassName`: tab class, or a function `(tab, isActive) => string`
- `indicatorClassName`: moving indicator class

## Example

```tsx
import { AnimatedTabs } from "@stemui/animated-tabs";

const tabs = [
  { id: "all", ariaLabel: "All" },
  { id: "sent", ariaLabel: "Sent" }
] as const;

<AnimatedTabs
  tabs={tabs}
  active={active}
  onChange={setActive}
  className="w-full"
  listClassName="gap-4"
  tabClassName={(tab, isActive) =>
    isActive ? "px-3 py-2 text-black" : "px-3 py-2 text-neutral-500"
  }
  indicatorClassName="bg-blue-500"
  renderTab={(tab, isActive) => <span>{tab.id}</span>}
/>;
```

The package includes its base CSS automatically when you import `@stemui/animated-tabs`.

## Publish Notes

This package is published as ESM and builds automatically during `npm pack` and `npm publish` via the `prepack` script.

From the workspace root:

```bash
npm run publish:animated-tabs
```

That script bumps the package patch version before publishing. Use the root `version:animated-tabs:*` scripts when you need a `minor` or `major` release.
