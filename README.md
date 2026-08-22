# Phresh Program

The minimal PhreshOS starter Program. It has one browser Client, no Server,
no service, and no application architecture to learn before getting started.

```bash
bun install
bun run dev
```

The complete authored source is intentionally small:

```text
source/client/
├── index.html
├── main.tsx
└── style.css
```

`phresh.config.ts` declares the Program and its Client. `bun run build` creates
the production Client in `dist/client`.
