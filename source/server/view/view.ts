import { current } from "@phreshos/server"
import docs from "@/api-docs.md?raw"
import Counter from "@server/core/counter"

const counter = new Counter()

/** Exposes the counter core through this Server endpoint. */
export default async function view() {
  current.answer("read", () => counter.read())

  current.subscribe("increment", () => {
    current.publish("changed", counter.increment())
  })

  await current.enableService({ name: "counter", docs })
}
