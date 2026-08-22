import { defineConfig } from "@phreshos/core"

export default defineConfig({
    identity: "phresh-program",
    name: "Phresh Program",
    description: "A minimal counter with direct Client and Server endpoints.",
    version: "0.1.10",
    icon: "icon.png",
    buildCommand: "vite-node scripts/build.ts",
    server: {
        location: "dist/server",
        startCommand: "node main.js",
        development: {
            startCommand: "vite-node source/server/main.ts"
        }
    },
    client: {
        location: "dist/client",
        title: "Phresh Program",
        size: { width: 600, height: 500 },
        development: {
            url: "http://localhost:5200/",
            startCommand: "vite dev --config vite.client.ts"
        }
    }
})
