import { current } from "@phreshos/server"

let count = 0

current.answer("read", () => count)

current.subscribe("increment", () => {
    count += 1
    current.publish("changed", count)
})
