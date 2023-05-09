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

    const curent: T = this.queue[0]
    let curentIndex: number = 0

    let childOneIndex: number = curentIndex * 2 + 1
    let childTwoIndex: number = curentIndex * 2 + 2

    let childOne: T = this.queue[childOneIndex]
    let childTwo: T = this.queue[childTwoIndex]

    while (
      (childOne !== undefined && this.comparison(curent, childOne) < 0) ||
      (childTwo !== undefined && this.comparison(curent, childTwo) < 0)
    ) {
      let childOneComparedValue = null
      let childTwoComparedValue = null

      if (childOne !== undefined) {
        childOneComparedValue = this.comparison(curent, childOne)
      }

      if (childTwo !== undefined) {
        childTwoComparedValue = this.comparison(curent, childTwo)
      }

      if (
        childTwoComparedValue === null ||
        (childOneComparedValue !== null &&
          childOneComparedValue < childTwoComparedValue)
      ) {
        this.swap(curentIndex, childOneIndex)
        curentIndex = childOneIndex
      } else {
        this.swap(curentIndex, childTwoIndex)
        curentIndex = childTwoIndex
      }

      childOneIndex = curentIndex * 2 + 1
      childTwoIndex = curentIndex * 2 + 2

      childOne = this.queue[childOneIndex]
      childTwo = this.queue[childTwoIndex]

      if (childOne !== undefined) {
        childOneComparedValue = this.comparison(curent, childOne)
      }

      if (childTwo !== undefined) {
        childTwoComparedValue = this.comparison(curent, childTwo)
      }
    }

    return returnValue
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  peek(): T {
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
