import SinglyLinkedList from './SinglyLinkedList'

describe('SinglyLinkedList', () => {
  test('push and pop elements', () => {
    const list = new SinglyLinkedList()
    expect(list.length).toBe(0)

    list.push(1)
    expect(list.length).toBe(1)

    list.push(2)
    expect(list.length).toBe(2)

    const poppedValue1 = list.pop()
    expect(poppedValue1).toBe(2)
    expect(list.length).toBe(1)

    const poppedValue2 = list.pop()
    expect(poppedValue2).toBe(1)
    expect(list.length).toBe(0)

    const poppedValue3 = list.pop()
    expect(poppedValue3).toBeUndefined()
    expect(list.length).toBe(0)
  })

  test('unshift and shift elements', () => {
    const list = new SinglyLinkedList()
    expect(list.length).toBe(0)

    list.unshift(1)
    expect(list.length).toBe(1)

    list.unshift(2)
    expect(list.length).toBe(2)

    const shiftedValue1 = list.shift()
    expect(shiftedValue1).toBe(2)
    expect(list.length).toBe(1)

    const shiftedValue2 = list.shift()
    expect(shiftedValue2).toBe(1)
    expect(list.length).toBe(0)

    const shiftedValue3 = list.shift()
    expect(shiftedValue3).toBeUndefined()
    expect(list.length).toBe(0)
  })

  test('iterate over elements', () => {
    const list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)

    const expectedValues = [1, 2, 3]
    let index = 0

    for (const value of list) {
      expect(value).toBe(expectedValues[index])
      index++
    }
  })

  test('edge cases', () => {
    const list = new SinglyLinkedList()
    expect(list.length).toBe(0)

    let iterationCount = 0
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of list) {
      iterationCount++
    }
    expect(iterationCount).toBe(0)

    list.unshift(1)
    expect(list.length).toBe(1)

    const shiftedValue = list.shift()
    expect(shiftedValue).toBe(1)
    expect(list.length).toBe(0)

    list.push(1)
    expect(list.length).toBe(1)

    const poppedValue = list.pop()
    expect(poppedValue).toBe(1)
    expect(list.length).toBe(0)
  })
})
