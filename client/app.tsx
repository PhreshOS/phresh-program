import { useEffect, useState } from "react"
import { context } from "@phreshos/client"
import { useSubscribe } from "@phreshos/react"
import { AppLayout, Button, Flex, Heading, Panel, Text, Tree } from "@phreshos/react-ui"
import { House, Info, Plus } from "@phreshos/react-ui/icons"

type Page = "home" | "about"

/** A sidebar of pages, and the chosen page beside it. Add a page: one Tree item and one case below. */
export default function App() {
    const [page, setPage] = useState<Page>("home")

    return <AppLayout style={{ height: "100%", padding: "0.75rem" }}>
        <AppLayout.Title>Phresh Program</AppLayout.Title>
        <AppLayout.Sidebar aria-label="Pages">
            <Tree aria-label="Pages" selectionMode="single" value={page} onChange={value => { if (value) setPage(value as Page) }}>
                <Tree.Item id="home" textValue="Home"><Tree.Content><House />Home</Tree.Content></Tree.Item>
                <Tree.Item id="about" textValue="About"><Tree.Content><Info />About</Tree.Content></Tree.Item>
            </Tree>
        </AppLayout.Sidebar>
        <AppLayout.Header>{page === "home" ? "Home" : "About"}</AppLayout.Header>
        <AppLayout.Content>
            {page === "home" ? <Home /> : <About />}
        </AppLayout.Content>
    </AppLayout>
}

/** A counter the Server keeps: the Client asks for it once, and hears every change. */
function Home() {
    const [count, setCount] = useState<number>()

    useSubscribe(context.server, "changed", setCount)
    useEffect(() => { void context.server.ask<number>("read").then(setCount) }, [])

    return <Flex direction="column" align="center" justify="center" gap="medium" style={{ height: "100%" }}>
        <Text tone="secondary">The Server counts, and every window of this Program sees it.</Text>
        <Heading level={1} size="xlarge">{count ?? "…"}</Heading>
        <Button color="primary" onPress={() => context.server.publish("increment")}><Plus />Count</Button>
    </Flex>
}

/** What this Program is: its name and version, as the System holds them, and what it says of itself. */
function About() {
    const [about, setAbout] = useState<Readonly<{ name: string, version: string, description: string }>>()

    useEffect(() => {
        void context.program().then(program => setAbout({ name: program.name, version: program.version, description: program.description ?? "" }))
    }, [])

    return <Panel>
        <Panel.Header>{about?.name ?? "…"}</Panel.Header>
        <Panel.Content>
            <Flex direction="column" gap="small">
                <Text>{about?.description}</Text>
                <Text tone="secondary" size="small">Version {about?.version}</Text>
            </Flex>
        </Panel.Content>
    </Panel>
}
