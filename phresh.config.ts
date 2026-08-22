import { defineConfig } from "@phreshos/core"

export default defineConfig({
    identity: "phresh-program",
    name: "Phresh Program",
    description: "A minimal client-only PhreshOS Program.",
    version: "0.1.7",
    icon: "icon.png",
    buildCommand: "vite-node scripts/build.ts",
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
