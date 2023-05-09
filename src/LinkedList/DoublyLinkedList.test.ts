import DoublyLinkedList from './DoublyLinkedList'

describe('DoublyLinkedList', () => {
  test('push, pop, unshift, and shift operations', () => {
    const list = new DoublyLinkedList<number>()

    expect(list.length).toBe(0)

    list.push(1)
    expect(list.length).toBe(1)

    list.push(2)
    expect(list.length).toBe(2)

    list.unshift(0)
    expect(list.length).toBe(3)

    const shifted = list.shift()
    expect(shifted).toBe(0)
    expect(list.length).toBe(2)

    const popped = list.pop()
    expect(popped).toBe(2)
    expect(list.length).toBe(1)

    list.pop()
    expect(list.length).toBe(0)
  })

  test('pop and shift operations on empty list', () => {
    const list = new DoublyLinkedList<number>()

    const popped = list.pop()
    expect(popped).toBeUndefined()
    expect(list.length).toBe(0)

    const shifted = list.shift()
    expect(shifted).toBeUndefined()
    expect(list.length).toBe(0)
  })
})
