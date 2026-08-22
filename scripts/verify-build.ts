import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import config from "../phresh.config"
import manifest from "../package.json" with { type: "json" }

assert.equal(config.identity, "phresh-program")
assert.equal(config.name, "Phresh Program")
assert.equal(config.version, manifest.version)
assert.equal(config.server, undefined)
assert.equal(config.client?.location, "dist/client")
assert.deepEqual(config.client?.size, { width: 600, height: 500 })

assert(readFileSync("dist/client/index.html", "utf8").length > 0)
assert.equal(existsSync("dist/server"), false)
