import BinaryHeap from './BinaryHeap'

describe('BinaryHeap', () => {
  const comparison = (a: number, b: number): number => a - b
  let binaryHeap: BinaryHeap<number>

  beforeEach(() => {
    binaryHeap = new BinaryHeap<number>(comparison)
  })

  test('should insert values and maintain order', () => {
    binaryHeap.insert(5)
    binaryHeap.insert(10)
    binaryHeap.insert(1)
    binaryHeap.insert(8)
    binaryHeap.insert(2)

    expect(binaryHeap.size()).toBe(5)
    expect(binaryHeap.peek()).toBe(10)
  })

  test('should extract values in correct order', () => {
    binaryHeap.insert(5)
    binaryHeap.insert(10)
    binaryHeap.insert(1)
    binaryHeap.insert(8)
    binaryHeap.insert(2)

    expect(binaryHeap.extract()).toBe(10)
    expect(binaryHeap.extract()).toBe(8)
    expect(binaryHeap.extract()).toBe(5)
    expect(binaryHeap.extract()).toBe(2)
    expect(binaryHeap.extract()).toBe(1)
  })

  test('should clear the heap', () => {
    binaryHeap.insert(5)
    binaryHeap.insert(10)
    binaryHeap.insert(1)

    binaryHeap.clear()
    expect(binaryHeap.size()).toBe(0)
    expect(binaryHeap.isEmpty()).toBeTruthy()
  })

  test('should return undefined when extracting from an empty heap', () => {
    expect(binaryHeap.extract()).toBeUndefined()
  })

  test('should return true when the heap is empty and false otherwise', () => {
    expect(binaryHeap.isEmpty()).toBeTruthy()

    binaryHeap.insert(5)
    expect(binaryHeap.isEmpty()).toBeFalsy()

    binaryHeap.extract()
    expect(binaryHeap.isEmpty()).toBeTruthy()
  })

  test('should return the correct size of the heap', () => {
    expect(binaryHeap.size()).toBe(0)

    binaryHeap.insert(5)
    expect(binaryHeap.size()).toBe(1)

    binaryHeap.insert(10)
    expect(binaryHeap.size()).toBe(2)

    binaryHeap.extract()
    expect(binaryHeap.size()).toBe(1)
  })
})
