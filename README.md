# Phresh Program

The minimal PhreshOS starter Program. Its Client talks directly to its Server;
there is no MVC structure and no registered service.

```bash
bun install
bun run dev
```

The complete authored source is intentionally small:

```text
source/
├── client/
│   ├── app.tsx
│   ├── index.html
│   ├── main.tsx
│   └── style.css
└── server/
    └── main.ts
```

`app.tsx` owns the small React component. The two `main` files are direct
endpoint entries: the Client renders the app and the Server owns the counter.
Nothing registers or exposes a named service.
