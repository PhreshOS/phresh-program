/** Owns the Program's authoritative counter state without knowing how it is exposed. */
export default class Counter {
  private value = 0

  public read() {
    return this.value
  }

  public increment() {
    this.value += 1
    return this.value
  }
}
