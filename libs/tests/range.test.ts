import { range } from '../range'

// __________
//
describe('range()', () => {
  test('range(0, 5)', () => {
    const result = range(0, 5)
    expect([...result]).toEqual([0, 1, 2, 3, 4])
  })

  test('range(2, 9, 2)', () => {
    const result = range(2, 9, 2)
    expect([...result]).toEqual([2, 4, 6, 8])
  })

  test('range(9, -1, -1)', () => {
    const result = range(9, -1, -1)
    expect([...result]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  })
})
