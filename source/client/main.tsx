import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style.css"

const root = document.getElementById("root")

if (!root) throw new Error("The Client page has no root element")

createRoot(root).render(
    <StrictMode>
        <main>
            <span>PhreshOS</span>
            <h1>Phresh Program</h1>
            <p>A minimal client-only Program.</p>
        </main>
    </StrictMode>
)
