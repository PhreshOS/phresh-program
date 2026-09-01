import { context } from "@phreshos/client"
import type { Server } from "@phreshos/client"
import { useSubscribe } from "@phreshos/react"
import { useEffect, useState } from "react"

type CounterEvents = { changed: number }

const server = context.server as unknown as Server<CounterEvents>

export default function App() {
    const [count, setCount] = useState<number>()

    useSubscribe(server, "changed", setCount)

    useEffect(() => {
        server.ask<number>("read").then(setCount)
    }, [])

    return <main>
        <span>PhreshOS</span>
        <h1>Server counter</h1>
        <p>The Client talks directly to its Process Server.</p>
        <button type="button" onClick={() => server.publish("increment")}>
            Count is {count ?? "…"}
        </button>
    </main>
}
