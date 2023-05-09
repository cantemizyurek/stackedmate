class BinaryHeap<T> {
  private queue: T[]
  private comparison: (itemOne: T, itemTwo: T) => number

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

    if (iterable) {
      for (let item of iterable) {
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

    while (index > 0 && parent && this.comparison(parent, value) < 0) {
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

    let childOneComparedValue = this.comparison(curent, childOne)
    let childTwoComparedValue = this.comparison(curent, childTwo)

    while (
      (childOne !== undefined && childOneComparedValue < 0) ||
      (childTwo !== undefined && childTwoComparedValue < 0)
    ) {
      if (
        (childOne !== undefined &&
          childOneComparedValue < childTwoComparedValue) ||
        childTwo === undefined
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

      childOneComparedValue = this.comparison(curent, childOne)
      childTwoComparedValue = this.comparison(curent, childTwo)
    }

    return returnValue
  }

  isEmpty(): boolean {
    return this.queue.length == 0
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
