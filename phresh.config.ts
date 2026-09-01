import { defineConfig } from "@phreshos/core"

export default defineConfig({
    identity: "phresh",
    name: "Phresh Program",
    description: "A minimal counter with direct Client and Server endpoints.",
    version: "0.1.28",
    icon: "icon.png",
    categories: ["Development"],
    keywords: ["example", "counter", "client", "server"],
    website: "https://github.com/PhreshOS/phresh-program",
    buildCommand: "vite-node scripts/build.ts",
    server: {
        location: "dist/server",
        entryFile: "main.js",
        development: {
            startCommand: "vite-node server/main.ts"
        }
    },
    client: {
        location: "dist/client",
        title: "Phresh Program",
        size: { width: 600, height: 500 },
        development: {
            url: "http://localhost:5200/",
            startCommand: "vite --config vite.client.ts"
        }
    }
})
