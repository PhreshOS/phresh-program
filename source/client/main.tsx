import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import "./style.css"

const root = document.getElementById("root")

if (!root) throw new Error("The Client page has no root element")

createRoot(root).render(
    <StrictMode><App /></StrictMode>
)
