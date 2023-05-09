interface Children<T> {
  value: T
  comparedValue: number | undefined
  index: number
}

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
    let index = this.queue.length
    this.queue.push(value)

    let parentIndex = Math.floor((index - 1) / 2)
    let parent = this.queue[parentIndex]

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

    let currentIndex: number = 0
    let children = this.getChildren(currentIndex)

    while (
      (children[0].comparedValue !== undefined &&
        children[0].comparedValue < 0) ||
      (children[1].comparedValue !== undefined && children[1].comparedValue < 0)
    ) {
      if (
        children[1].comparedValue === undefined ||
        (children[0].comparedValue !== undefined &&
          children[0].comparedValue < children[1].comparedValue)
      ) {
        this.swap(currentIndex, children[0].index)
        currentIndex = children[0].index
      } else {
        this.swap(currentIndex, children[1].index)
        currentIndex = children[1].index
      }

      children = this.getChildren(currentIndex)
    }

    return returnValue
  }

  private getChildren(index: number): [Children<T>, Children<T>] {
    const currentElement = this.queue[index]

    const elementOne = this.queue[index * 2 + 1]
    const elementTwo = this.queue[index * 2 + 2]

    return [
      {
        value: elementOne,
        comparedValue: this.calculateComparedValue(currentElement, elementOne),
        index: index * 2 + 1
      },
      {
        value: elementTwo,
        comparedValue: this.calculateComparedValue(currentElement, elementTwo),
        index: index * 2 + 2
      }
    ]
  }

  private calculateComparedValue(
    elementOne: T,
    elementTwo: T | undefined
  ): number | undefined {
    if (elementTwo === undefined) return undefined

    return this.comparison(elementOne, elementTwo)
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
