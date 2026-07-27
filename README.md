# web-ui

Shared web UI packages.

## Playground deployment

```bash
npm run publish:playground
```

This builds and packages `animated-tabs-playground` for Sites production deployment. The final production deployment still runs through the Sites publisher so repository credentials remain outside the project.

## Packages

- `@stemui/animated-tabs`: animated underline/pill tabs with caller-rendered tab content.

## Publish

```bash
npm install
npm run build
npm run publish:animated-tabs
```

`npm run publish:animated-tabs` will bump the package patch version before publishing.
