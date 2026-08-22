# Contributing

Phresh Program is the minimal client-only PhreshOS starter. Changes belong here
when they keep the starter small, direct, and independently runnable.

## Development

Install the pinned toolchain and verify the complete repository:

```sh
bun install --frozen-lockfile
bun run verify
```

`verify` type-checks the project, builds the Client, and checks the production
entry point against the authored Program declaration. The repository must
remain independently installable and runnable without a PhreshOS workspace
around it.

## Pull requests

Keep each pull request focused on one coherent change and avoid adding
architecture before the starter actually needs it.
