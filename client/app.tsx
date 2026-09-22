import { useSubscribe, useWindowState } from "@phreshos/react"
import { useEffect, useState } from "react"
import { context } from "@phreshos/client"

export default function App() {
    const [count, setCount] = useState<number>()

    const state = useWindowState(context.presentation)

    useSubscribe(context.server, "changed", setCount)

    useEffect(() => {
        context.server.ask<number>("read").then(setCount)
    }, [])

    return <main>
        <span>PhreshOS</span>
        <pre>{JSON.stringify(state, undefined, 4)}</pre>
        <h1>Server counter</h1>
        <p>The Client talks directly to its Process Server.</p>
        <button type="button" onClick={() => context.server.publish("increment")}>
            Count is {count ?? "…"}
        </button>
    </main>
}
