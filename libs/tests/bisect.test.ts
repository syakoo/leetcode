import { bisectLeft, bisectRight } from '../bisect'

// __________
//
describe('bisectLeft()', () => {
  test('bisectLeft([0, 1, 2, 3, 4], 3)', () => {
    const result = bisectLeft([0, 1, 2, 3, 4], 3)
    expect(result).toBe(3)
  })
  test('bisectLeft([0, 1, 2, 3, 4], 5)', () => {
    const result = bisectLeft([0, 1, 2, 3, 4], 5)
    expect(result).toBe(5)
  })
  test('bisectLeft([0, 1, 2, 3, 4], 100)', () => {
    const result = bisectLeft([0, 1, 2, 3, 4], 100)
    expect(result).toBe(5)
  })
  test('bisectLeft([0, 1, 2, 3, 4], -100)', () => {
    const result = bisectLeft([0, 1, 2, 3, 4], -100)
    expect(result).toBe(0)
  })
  test('bisectLeft([0, 1, 3, 4], 2)', () => {
    const result = bisectLeft([0, 1, 3, 4], 2)
    expect(result).toBe(2)
  })
  test('bisectLeft([1, 1, 2, 3, 4, 4, 4, 7, 8], 5)', () => {
    const result = bisectLeft([1, 1, 2, 3, 4, 4, 4, 7, 8], 5)
    expect(result).toBe(7)
  })
  test('bisectLeft([1, 1, 2, 3, 4, 4, 4, 7, 8], 4)', () => {
    const result = bisectLeft([1, 1, 2, 3, 4, 4, 4, 7, 8], 4)
    expect(result).toBe(4)
  })
})

// __________
//
describe('bisectRight()', () => {
  test('bisectRight([0, 1, 2, 3, 4], 3)', () => {
    const result = bisectRight([0, 1, 2, 3, 4], 3)
    expect(result).toBe(4)
  })
  test('bisectRight([0, 1, 2, 3, 4], 5)', () => {
    const result = bisectRight([0, 1, 2, 3, 4], 5)
    expect(result).toBe(5)
  })
  test('bisectRight([0, 1, 2, 3, 4], 100)', () => {
    const result = bisectRight([0, 1, 2, 3, 4], 100)
    expect(result).toBe(5)
  })
  test('bisectRight([0, 1, 2, 3, 4], -100)', () => {
    const result = bisectRight([0, 1, 2, 3, 4], -100)
    expect(result).toBe(0)
  })
  test('bisectRight([0, 1, 3, 4], 2)', () => {
    const result = bisectRight([0, 1, 3, 4], 2)
    expect(result).toBe(2)
  })
  test('bisectRight([1, 1, 2, 3, 4, 4, 4, 7, 8], 5)', () => {
    const result = bisectRight([1, 1, 2, 3, 4, 4, 4, 7, 8], 5)
    expect(result).toBe(7)
  })
  test('bisectRight([1, 1, 2, 3, 4, 4, 4, 7, 8], 4)', () => {
    const result = bisectRight([1, 1, 2, 3, 4, 4, 4, 7, 8], 4)
    expect(result).toBe(7)
  })
})
