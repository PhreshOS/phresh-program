import { defineConfig } from "@phreshos/core"

export default defineConfig({
    identity: "phresh",
    name: "Phresh Program",
    description: "A ready starting point: pages in a sidebar, drawn with React UI, and a counter its Server keeps.",
    version: "0.1.49",
    // The Desktop's own icon for a Program that has none yet: replace icon.png with yours.
    icon: "icon.png",
    categories: ["Development"],
    keywords: ["example", "counter", "client", "server"],
    website: "https://github.com/PhreshOS/phresh-program",
    buildCommand: "vite-node scripts/build.ts",
    server: {
        location: "dist/server",
        worker: "main.js",
        devCommand: "vite-node server/main.ts"
    },
    client: {
        location: "dist/client",
        title: "Phresh Program",
        size: { width: 820, height: 540 },
        devCommand: "vite --config vite.client.ts"
    }
})
