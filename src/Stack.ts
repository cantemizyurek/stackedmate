class Stack<T> {
  private stack: T[]

  constructor()
  constructor(iterable: Iterable<T>)
  constructor(iterable?: Iterable<T>) {
    this.stack = []
    if (iterable !== undefined) {
      for (const item of iterable) {
        this.push(item)
      }
    }
  }

  push(value: T): void {
    this.stack.push(value)
  }

  pop(): T | undefined {
    return this.stack.pop()
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1]
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  size(): number {
    return this.stack.length
  }

  clear(): void {
    this.stack = []
  }
}

export default Stack
