import { Deque } from '../collections'

// __________
//
describe('Deque()', () => {
  test('push and pop test1', () => {
    const deque = new Deque([0, 1, 2])

    expect(deque.popFirst()).toBe(0)
    expect(deque.popFirst()).toBe(1)
    expect(deque.popFirst()).toBe(2)
    expect(deque.length).toBe(0)
    deque.pushFirst(3)
    deque.pushFirst(4)
    deque.pushFirst(5)
    expect(deque.length).toBe(3)
    expect(deque.popLast()).toBe(3)
    expect(deque.popLast()).toBe(4)
    expect(deque.length).toBe(1)
    expect(deque.popLast()).toBe(5)
    deque.pushLast(6)
    expect(deque.popFirst()).toBe(6)
    expect(deque.length).toBe(0)
  })

  test('push and pop test2', () => {
    const deque = new Deque(['0', '1', '2'])

    expect(deque.popFirst()).toBe('0') // 1, 2
    expect(deque.popLast()).toBe('2') // 1
    expect(deque.length).toBe(1)
    deque.pushFirst('3') // 3, 1
    expect(deque.length).toBe(2)
    deque.pushLast('4') // 3, 1, 4
    expect(deque.length).toBe(3)
    expect(deque.popLast()).toBe('4') // 3, 1
    expect(deque.length).toBe(2)
    expect(deque.popFirst()).toBe('3') // 1
    expect(deque.length).toBe(1)
    expect(deque.popFirst()).toBe('1')
    expect(deque.length).toBe(0)
  })

  test('getFirst()', () => {
    const deque = new Deque([0, 1, 2, 3, 4, 5])

    expect(deque.getFirst()).toBe(0)
    expect(deque.getFirst(0)).toBe(0)
    expect(deque.getFirst(4)).toBe(4)
    deque.popFirst()
    expect(deque.getFirst()).toBe(1)
    expect(deque.getFirst(4)).toBe(5)
    deque.pushFirst(6)
    deque.pushFirst(7)
    expect(deque.getFirst(1)).toBe(6)
    deque.pushLast(8)
    expect(deque.getFirst(7)).toBe(8)
  })

  test('getLast()', () => {
    const deque = new Deque([0, 1, 2, 3, 4, 5])

    expect(deque.getLast()).toBe(5)
    expect(deque.getLast(0)).toBe(5)
    expect(deque.getLast(4)).toBe(1)
    deque.popLast()
    expect(deque.getLast()).toBe(4)
    expect(deque.getLast(4)).toBe(0)
    deque.pushLast(6)
    deque.pushLast(7)
    expect(deque.getLast(1)).toBe(6)
    deque.pushFirst(8)
    expect(deque.getLast(7)).toBe(8)
  })
})
