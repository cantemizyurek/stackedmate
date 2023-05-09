export interface LinkedList<T, U> {
  length: number
  createNode: (value: T) => U
  push: (value: T) => void
  pop: () => T | undefined
  unshift: (value: T) => void
  shift: () => T | undefined
  peek: () => T | undefined
}

export interface LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
}
