import Queue from './Queue'

describe('Queue', () => {
  test('enqueue, dequeue, peek, isEmpty, size, and clear operations', () => {
    const queue = new Queue<number>()

    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)

    queue.enqueue(1)
    expect(queue.peek()).toBe(1)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toBe(1)

    queue.enqueue(2)
    expect(queue.peek()).toBe(1)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toBe(2)

    const dequeued = queue.dequeue()
    expect(dequeued).toBe(1)
    expect(queue.peek()).toBe(2)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toBe(1)

    queue.clear()
    expect(queue.peek()).toBeUndefined()
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toBe(0)
  })
})
