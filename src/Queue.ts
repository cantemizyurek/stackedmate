import DoublyLinkedLidst from './LinkedList/DoublyLinkedList'

class Queue<T> {
  private queue: DoublyLinkedLidst<T>

  constructor(iterable: Iterable<T>)
  constructor()
  constructor(iterable?: Iterable<T>) {
    if (iterable !== undefined) {
      this.queue = new DoublyLinkedLidst<T>(iterable)
    } else {
      this.queue = new DoublyLinkedLidst<T>()
    }
  }

  enqueue(value: T): void {
    this.queue.push(value)
  }

  dequeue(): T | undefined {
    return this.queue.shift()
  }

  peek(): T | undefined {
    return this.queue.peek()
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  size(): number {
    return this.queue.length
  }

  clear(): void {
    this.queue = new DoublyLinkedLidst<T>()
  }
}

export default Queue
