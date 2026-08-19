import { current } from "@phreshos/server"
import docs from "@/api-docs.md?raw"

// The Server owns the value. Every Client representation reads and changes
// this same state instead of keeping an independent browser counter.
let count = 0

current.answer("read", () => count)

current.subscribe("increment", async function () {

    count += 1

    current.publish("changed", count)
})

await current.enableService({ name: "counter", docs })
