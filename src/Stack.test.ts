import Stack from './Stack'

describe('Stack', () => {
  test('push, pop, peek, isEmpty, size, and clear operations', () => {
    const stack = new Stack<number>()

    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)

    stack.push(1)
    expect(stack.peek()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(1)

    stack.push(2)
    expect(stack.peek()).toBe(2)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(2)

    const popped = stack.pop()
    expect(popped).toBe(2)
    expect(stack.peek()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(1)

    stack.clear()
    expect(stack.peek()).toBeUndefined()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
  })

  test('constructor with iterable', () => {
    const iterable = [1, 2, 3]
    const stack = new Stack(iterable)

    expect(stack.isEmpty()).toBe(false)
    expect(stack.size()).toBe(3)
    expect(stack.peek()).toBe(3)

    stack.pop()
    expect(stack.peek()).toBe(2)
    expect(stack.size()).toBe(2)
  })
})
