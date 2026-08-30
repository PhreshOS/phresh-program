import { context } from "@phreshos/server"

let count = 0

context.answer("read", () => count)

context.subscribe("increment", () => {
    count += 1
    context.publish("changed", count)
})
