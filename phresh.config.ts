import { defineConfig } from "@phreshos/core"

/**
 * This is the Program's authoring declaration, not a runtime configuration
 * loaded by either endpoint. The Phresh CLI reads it and derives the concrete
 * Program description needed for development, production, installation, or
 * packaging.
 *
 * Production uses the built locations and commands declared below.
 * Development replaces only each endpoint's location and start command with
 * its `development` declaration. Packaging relocates the production files
 * into the Program archive. Relative paths begin at this project directory.
 */
export default defineConfig({

    // Permanent public address of the Program. It is kebab-case because the
    // system also uses it as the installed directory name. Unlike `name`, it
    // is an identifier and must remain stable across releases.
    identity: "phresh-program",

    // Human-facing metadata shown by the desktop and authoring tools. None of
    // these values determines the Program's identity.
    name: "Phresh Program",
    description: "A simple counter whose state lives on the Server.",
    version: "0.1.2",

    // Markdown entry point for the API owned by this Program. It documents the
    // counter service contract; PhreshOS endpoint mechanics belong in PhreshOS
    // documentation instead of being repeated here.
    apiDocs: "api-docs.md",

    // One authored PNG. Installation gives it a canonical name and the system
    // derives the standard hosted icon sizes from it.
    icon: "icon.png",

    // Prepares both production endpoint directories. The CLI runs it from this
    // project before `phresh start`, `phresh install`, and `phresh pack`.
    // `phresh dev` does not build and uses the declarations below instead.
    buildCommand: "node --import tsx source/build.ts",

    // A Process may run its Server and Client independently. This declaration
    // says how the Server is prepared and started; it does not merge Server
    // code into the browser Client.
    server: {

        // Production directory containing the Server artifact. The start
        // command runs with this directory as its working directory.
        location: "dist/server",
        startCommand: "node main.js",

        // An install command is optional and runs inside `location` when the
        // Program is installed. This build bundles its Server dependencies, so
        // the example does not need one.
        // installCommand: "npm install",

        // Declared endpoints start in a default Process unless `start` is
        // false. A false value keeps the capability available for an explicit
        // Process launch without starting it automatically.
        // start: false,

        development: {

            // `phresh dev` runs this command from the project directory. The
            // project directory becomes the development Server location, so
            // source imports and watch mode work without a production build.
            startCommand: "node --watch --import tsx source/server/main.ts"
        }
    },

    // The Client declaration also defines the initial Window created for it.
    // It contains presentation defaults only; live Window state belongs to
    // each running Process.
    client: {

        // Production directory containing the browser application's
        // `index.html` and all files reachable from it.
        location: "dist/client",

        // Initial Window values. The title defaults to the Program name when
        // omitted. This example chooses a fixed initial size while leaving
        // placement, layer, and minimized state to their system defaults.
        title: "Phresh Program",
        size: { width: 600, height: 500 },

        // Geometry accepts finite pixel numbers or linear values. Fractions
        // and percentages are relative to the selected desktop layer, and a
        // pixel offset may be combined with either form.
        // size: { width: "50% + 20", height: 440 },
        // position: { x: "1/2 + 10", y: 40 },

        // `window` is the ordinary framed layer. `under` and `over` are
        // structurally isolated, frameless desktop layers.
        // layer: "window",

        // The initial Window may also be declared to open minimized.
        // minimize: true,

        development: {

            // Development Clients are addressed by URL rather than a local
            // artifact directory. The CLI starts this optional tool, waits for
            // the URL to respond, and only then launches the Program. The dev
            // server must allow the desktop origin through CORS; this project's
            // Vite configuration does so.
            url: "http://localhost:5200/",
            startCommand: "vite dev --config vite.client.ts"
        }
    }
})
