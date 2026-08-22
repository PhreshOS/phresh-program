import { current } from "@phreshos/client"
import { StrictMode } from "react"
import client from "react-dom/client"
import App from "./app"
import "./style.css"

await current.window.local.surface.set(
    { radius: "medium" },
    { duration: 240, easing: "ease-out" }
)

const root = client.createRoot(document.body)

root.render(<StrictMode><App /></StrictMode>)
