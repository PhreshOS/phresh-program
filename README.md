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

The structure keeps composition, representation, and authoritative behavior distinct:

```text
source/
├── client/
│   ├── main.tsx   Client composition
│   └── view/      React representation
└── server/
    ├── main.ts    Server composition
    ├── core/      authoritative counter
    └── view/      endpoint adapter and service exposure
```

The Program declaration lives in `phresh.config.ts`. Its own service contract
is exposed as the `counter` Server service and documented in `api-docs.md`.
