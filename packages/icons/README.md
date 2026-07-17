# @stemui/icons

Icon package for the workspace monorepo. SVG source files are converted into typed React components and published as `@stemui/icons`.

## Install

```bash
npm install @stemui/icons
```

## Usage

```tsx
import { LineFileSaveIcon } from "@stemui/icons";

export function Example() {
  return <LineFileSaveIcon size={20} color="currentColor" />;
}
```

## Props

All generated icons support the same base props:

- `size?: number | string`
- `color?: string`
- `title?: string`
- all standard `svg` props such as `className`, `style`, `strokeWidth`

## For Maintainers

The commands below are for maintainers working inside this monorepo, not for consumers installing the package from npm.

### Daily Workflow

1. Drop SVG files into `svg/`.
2. Start the linked preview workflow from the workspace root:

```bash
npm run dev:icons:playground
```

This runs two processes together:
- `npm run dev:icons`
- `npm run dev:playground`

When SVG files are added, changed, renamed, or removed:
- the icon package regenerates components incrementally
- the playground reloads automatically

### Build Commands

For a one-off incremental build:

```bash
npm run build:incremental --workspace @stemui/icons
```

For a full publish build:

```bash
npm run build --workspace @stemui/icons
```

### Publish

From the workspace root:

```bash
npm run publish:icons
```

That command will:
- bump the package patch version
- run the full build
- publish the package to npm

If the version has already been bumped and you only need to retry publish:

```bash
npm run publish:icons:manual
```

### Naming

- Keep source files in SVG format.
- Prefer snake_case or kebab-case file names.
- Avoid spaces in file names. The build script normalizes spaces to `_`, and fails if that target name already exists.

Examples:
- `line_file_save.svg` -> `LineFileSaveIcon`
- `line-trash-delete.svg` -> `LineTrashDeleteIcon`
