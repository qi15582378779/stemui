# web-ui

Shared web UI packages.

## Playground deployment

```bash
npm run publish:playground
```

This builds and packages `animated-tabs-playground` for Sites production deployment. The final production deployment still runs through the Sites publisher so repository credentials remain outside the project.

GitHub Actions runs the playground build automatically for pull requests and pushes to `main`. Use the `Playground CI` manual workflow for a production approval checkpoint; after approval, tell Codex to publish the generated Sites build.

## Packages

- `@stemui/animated-tabs`: animated underline/pill tabs with caller-rendered tab content.

## Publish

```bash
npm install
npm run build
npm run publish:animated-tabs
```

`npm run publish:animated-tabs` will bump the package patch version before publishing.
