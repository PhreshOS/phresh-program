import { expect, test, vi } from "vitest"

const boundary = vi.hoisted(() => ({
  answer: vi.fn(),
  subscribe: vi.fn(),
  publish: vi.fn()
}))

vi.mock("@phreshos/server", () => ({ context: boundary }))

test("counter reads and published changes describe the same server state", async () => {
  await import("../server/main")
  expect(boundary.answer).toHaveBeenCalledWith("read", expect.any(Function))
  expect(boundary.subscribe).toHaveBeenCalledWith("increment", expect.any(Function))
  const read = boundary.answer.mock.calls[0]![1] as () => number
  const increment = boundary.subscribe.mock.calls[0]![1] as () => void
  expect(read()).toBe(0)
  increment()
  expect(read()).toBe(1)
  expect(boundary.publish).toHaveBeenLastCalledWith("changed", 1)
  increment()
  expect(read()).toBe(2)
  expect(boundary.publish).toHaveBeenLastCalledWith("changed", 2)
})
