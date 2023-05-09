import type { LinkedList, LinkedListNode } from './LinkedList'

interface DoublyLinkedLidstNode<T> extends LinkedListNode<T> {
  value: T
  next: null | DoublyLinkedLidstNode<T>
  previus: null | DoublyLinkedLidstNode<T>
}

class DoublyLinkedLidst<T>
  implements Iterable<T>, LinkedList<T, DoublyLinkedLidstNode<T>>
{
  private head: DoublyLinkedLidstNode<T> | null
  private tail: DoublyLinkedLidstNode<T> | null
  length: number

  constructor(iterable: Iterable<T>)
  constructor()
  constructor(iterable?: Iterable<T>) {
    this.head = null
    this.tail = this.head
    this.length = 0

    if (iterable !== undefined) {
      for (const item of iterable) {
        this.push(item)
      }
    }
  }

  push(value: T): void {
    this.length += 1
    const node = this.createNode(value)

    if (this.head == null || this.tail == null) {
      this.head = node
      this.tail = this.head
      return
    }

    this.tail.next = node
    node.previus = this.tail
    this.tail = this.tail.next
  }

  pop(): T | undefined {
    if (this.head == null || this.tail == null) {
      return undefined
    }

    this.length -= 1

    const cur = this.tail

    if (cur.previus == null) {
      this.tail = null
      this.head = this.tail
      return cur.value
    }

    this.tail = cur.previus
    this.tail.next = null
    cur.previus = null
    return cur.value
  }

  unshift(value: T): void {
    this.length += 1
    const node = this.createNode(value)

    if (this.head == null || this.tail == null) {
      this.head = node
      this.tail = this.head
      return
    }

    node.next = this.head
    this.head.previus = node
    this.head = node
  }

  shift(): T | undefined {
    if (this.head === null || this.tail === null) return undefined

    this.length -= 1

    const cur = this.head

    if (this.length === 0) {
      this.head = null
      this.tail = null

      return cur.value
    }

    this.head = cur.next
    cur.next = null
    if (this.head === null) return
    this.head.previus = null

    return cur.value
  }

  peek(): T | undefined {
    return this.head?.value
  }

  [Symbol.iterator](): Iterator<T> {
    let next = this.head
    return {
      next: () => {
        if (next == null) {
          return { value: null, done: true }
        }

        const cur = next
        next = cur.next

        return { value: cur.value, done: false }
      }
    }
  }

  createNode(value: T): DoublyLinkedLidstNode<T> {
    return { value, next: null, previus: null }
  }
}

export default DoublyLinkedLidst
