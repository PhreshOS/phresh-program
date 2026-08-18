# Phresh Program

A small Counter built as a complete Program. Its Node.js Server owns the
number, while its React Client reads and increments that same authoritative
state.

```bash
bun install
bun phresh dev
```

Development starts the Server source and Vite Client together. For the
production shape, build and attach the Program with:

```bash
bun phresh start
```

The structure follows the endpoint boundaries directly:

```text
source/
├── client/   React interface
└── server/   authoritative counter and API
```

The Program declaration lives in `phresh.config.ts`. Its own service contract
is documented in `api-docs.md`.
