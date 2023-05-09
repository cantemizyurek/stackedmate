class BinaryHeap<T> {
  private queue: T[]
  readonly comparison: (itemOne: T, itemTwo: T) => number

  constructor(
    comparison: (itemOne: T, itemTwo: T) => number,
    iterable: Iterable<T>
  )
  constructor(comparison: (itemOne: T, itemTwo: T) => number)
  constructor(
    comparison: (itemOne: T, itemTwo: T) => number,
    iterable?: Iterable<T>
  ) {
    this.queue = []
    this.comparison = comparison

    if (iterable !== undefined) {
      for (const item of iterable) {
        this.insert(item)
      }
    }
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.queue[indexOne]
    this.queue[indexOne] = this.queue[indexTwo]
    this.queue[indexTwo] = temp
  }

  insert(value: T): void {
    let index: number = this.queue.length
    this.queue.push(value)

    let parentIndex: number = Math.floor((index - 1) / 2)
    let parent: T = this.queue[parentIndex]

    if (parent === undefined) return

    while (index > 0 && Boolean(parent) && this.comparison(parent, value) < 0) {
      this.swap(index, parentIndex)
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
      parent = this.queue[parentIndex]
    }
  }

  extract(): T | undefined {
    this.swap(0, this.queue.length - 1)
    const returnValue = this.queue.pop()

    const current: T = this.queue[0]
    let currentIndex: number = 0

    let childOneIndex: number = currentIndex * 2 + 1
    let childTwoIndex: number = currentIndex * 2 + 2

    let childOne: T = this.queue[childOneIndex]
    let childTwo: T = this.queue[childTwoIndex]

    while (
      (childOne !== undefined && this.comparison(current, childOne) < 0) ||
      (childTwo !== undefined && this.comparison(current, childTwo) < 0)
    ) {
      let childOneComparedValue: number | undefined
      let childTwoComparedValue: number | undefined

      if (childOne !== undefined) {
        childOneComparedValue = this.comparison(current, childOne)
      }

      if (childTwo !== undefined) {
        childTwoComparedValue = this.comparison(current, childTwo)
      }

      if (
        childTwoComparedValue === undefined ||
        (childOneComparedValue !== undefined &&
          childOneComparedValue < childTwoComparedValue)
      ) {
        this.swap(currentIndex, childOneIndex)
        currentIndex = childOneIndex
      } else {
        this.swap(currentIndex, childTwoIndex)
        currentIndex = childTwoIndex
      }

      childOneIndex = currentIndex * 2 + 1
      childTwoIndex = currentIndex * 2 + 2

      childOne = this.queue[childOneIndex]
      childTwo = this.queue[childTwoIndex]

      if (childOne !== undefined) {
        childOneComparedValue = this.comparison(current, childOne)
      }

      if (childTwo !== undefined) {
        childTwoComparedValue = this.comparison(current, childTwo)
      }
    }

    return returnValue
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  peek(): T | undefined {
    return this.queue[0]
  }

  size(): number {
    return this.queue.length
  }

  clear(): void {
    this.queue = []
  }
}

export default BinaryHeap
