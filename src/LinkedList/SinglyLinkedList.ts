import type { LinkedList, LinkedListNode } from './LinkedList'

interface SinglyLinkedListNode<T> extends LinkedListNode<T> {
  value: T
  next: null | SinglyLinkedListNode<T>
}

class SinglyLinkedList<T>
  implements Iterable<T>, LinkedList<T, SinglyLinkedListNode<T>>
{
  private head: SinglyLinkedListNode<T> | null
  length: number

  constructor(iterable: Iterable<T>)
  constructor()
  constructor(iterable?: Iterable<T>) {
    this.length = 0
    this.head = null

    if (iterable !== undefined) {
      for (const item of iterable) {
        this.push(item)
      }
    }
  }

  push(value: T): void {
    this.length += 1
    const node = this.createNode(value)

    if (this.head === null) {
      this.head = node
      return
    }

    let cur = this.head

    while (cur.next !== null) {
      cur = cur.next
    }

    cur.next = node
  }

  pop(): T | undefined {
    if (this.head == null) return undefined

    this.length -= 1

    if (this.length === 0) {
      const cur = this.head
      this.head = null
      return cur.value
    }

    let prev: SinglyLinkedListNode<T> | null = null
    let cur: SinglyLinkedListNode<T> = this.head

    while (cur.next !== null) {
      prev = cur
      cur = cur.next
    }

    if (prev === null) return
    prev.next = null
    return cur.value
  }

  unshift(value: T): void {
    this.length += 1
    const node = this.createNode(value)

    node.next = this.head
    this.head = node
  }

  shift(): T | undefined {
    if (this.head == null) return undefined

    this.length -= 1

    const cur = this.head
    this.head = cur.next
    cur.next = null
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

  createNode(value: T): SinglyLinkedListNode<T> {
    return { value, next: null }
  }
}

export default SinglyLinkedList
