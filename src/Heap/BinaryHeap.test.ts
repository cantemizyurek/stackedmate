import BinaryHeap from './BinaryHeap'

enum HospitalPriority {
  High = 10,
  Medium = 5,
  Low = 1
}

interface Person {
  name: string
  age: number
  priority: HospitalPriority
}

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

  test('should correctly handle hospital priority queue', () => {
    const pq = new BinaryHeap<Person>((a, b) => a.priority - b.priority)

    pq.insert({ name: 'can', age: 17, priority: HospitalPriority.Medium })
    pq.insert({ name: 'ersan', age: 43, priority: HospitalPriority.High })
    pq.insert({ name: 'umut', age: 15, priority: HospitalPriority.Low })

    expect(pq.peek()).toEqual({
      name: 'ersan',
      age: 43,
      priority: HospitalPriority.High
    })

    expect(pq.extract()).toEqual({
      name: 'ersan',
      age: 43,
      priority: HospitalPriority.High
    })
    expect(pq.extract()).toEqual({
      name: 'can',
      age: 17,
      priority: HospitalPriority.Medium
    })
    expect(pq.extract()).toEqual({
      name: 'umut',
      age: 17,
      priority: HospitalPriority.Low
    })
  })
})
