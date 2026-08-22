import { rm } from "node:fs/promises"

process.env.NODE_ENV = "production"

const { build } = await import("vite")

await rm("dist", { recursive: true, force: true })
await build({ configFile: "vite.client.ts" })
