# Contributing

Phresh Program is the minimal Client-and-Server PhreshOS starter. Changes
belong here when they keep both endpoints direct, free of premature MVC
structure, and independently runnable.

## Development

Install the pinned toolchain and verify the complete repository:

```sh
bun install --frozen-lockfile
bun run verify
```

`verify` type-checks the project, builds both endpoints, and checks the
production entry points against the authored Program declaration. The
repository must remain independently installable and runnable without a
PhreshOS workspace around it.

## Pull requests

Keep each pull request focused on one coherent change and avoid adding
architecture before the starter actually needs it.
