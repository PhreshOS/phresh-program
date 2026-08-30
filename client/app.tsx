import { context } from "@phreshos/client"
import { useSubscribe } from "@phreshos/react"
import { useEffect, useState } from "react"

export default function App() {
    const [count, setCount] = useState<number>()

    useSubscribe(context.server, "changed", setCount)

    useEffect(() => {
        context.server.ask<number>("read").then(setCount)
    }, [])

    return <main>
        <span>PhreshOS</span>
        <h1>Server counter</h1>
        <p>The Client talks directly to its Process Server.</p>
        <button type="button" onClick={() => context.server.publish("increment")}>
            Count is {count ?? "…"}
        </button>
    </main>
}
