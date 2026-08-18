import { current } from "@phreshos/server"

// The Server owns the value. Every Client representation reads and changes
// this same state instead of keeping an independent browser counter.
let count = 0

current.answer("read", () => count)

current.subscribe("increment", async function () {

    count += 1

    current.publish("changed", count)
})
