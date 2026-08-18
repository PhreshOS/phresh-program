# Counter API

The Server owns one number for the lifetime of its Process.

| Name | Destination | Interaction | Payload | Answer |
| --- | --- | --- | --- | --- |
| `read` | Server | `ask()` | `undefined` | `number` |
| `increment` | Server | `publish()` | `undefined` | None |
| `changed` | Server | `subscribe()` | `number` | None |

## Ask the Server: `read`

`read` is a question addressed to this Process's Server. It answers with the
current counter value.

```ts
const count = await process.server.ask<number>("read")
```

## Publish to the Server: `increment`

`increment` is a one-way event addressed to this Process's Server. It adds one
to the counter and does not produce an answer.

```ts
process.server.publish("increment")
```

## Subscribe to the Server: `changed`

After an increment, the Server emits `changed` with the new counter value.
Anyone holding that Process's Server can subscribe to the event.

```ts
process.server.subscribe<number>("changed", count => {
  // use the latest count
})
```
