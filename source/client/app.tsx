import { useSubscribe } from "@phreshos/react"
import { useEffect, useState } from "react"
import { current } from "@phreshos/client"

function Counter() {

    const [count, setCount] = useState<number>()

    useSubscribe(current.server, "changed", setCount)

    useEffect(function () {

        current.server.ask<number>("read").then(setCount)

    }, [])

    return <main className="counter-card">

        <span className="label">Phresh Program</span>

        <h1>Server counter</h1>

        <p>The value belongs to the Server and is shared with every Client representation.</p>

        <button type="button" onClick={() => current.server.publish("increment")}>

            count is {count ?? "…"}

        </button>

    </main>
}

export default function App() {
    return <Counter />
}
