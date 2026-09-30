import { StrictMode } from "react"
import client from "react-dom/client"
import { context, desktop, system } from "@phreshos/client"
import { ContextProvider, DesktopProvider, SystemProvider, useDesktopPreferences, useSystemAppearance } from "@phreshos/react"
import { DocumentTheme, UIProvider } from "@phreshos/react-ui"
import App from "./app"
import "./style.css"

client.createRoot(document.getElementById("root")!).render(<StrictMode>
    <SystemProvider system={system}>
        <DesktopProvider desktop={desktop}>
            <ContextProvider context={context}>
                <Themed />
            </ContextProvider>
        </DesktopProvider>
    </SystemProvider>
</StrictMode>)

/** React UI draws with the System's Appearance, in this Desktop's theme, like the Desktop around it. */
function Themed() {
    return <UIProvider appearance={useSystemAppearance()} preferences={useDesktopPreferences()}>
        <DocumentTheme />
        <App />
    </UIProvider>
}
