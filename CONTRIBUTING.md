# Contributing

Phresh Program is a complete ordinary PhreshOS Program: its Server owns a
counter and its Client presents that state. Changes belong here when they keep
that Program coherent across its authoring source, production build, and
Program-owned API contract.

## Development

Install the pinned toolchain and verify the complete repository:

```sh
bun install --frozen-lockfile
bun run verify
```

`verify` type-checks the project, builds both endpoints from source, and checks
the resulting production entry points against the authored Program
declaration. The repository must remain independently installable and runnable
without a PhreshOS workspace around it.

## Pull requests

Explain the Program behavior the change serves, update `api-docs.md` when its
counter contract changes, and keep each pull request focused on one coherent
change.
