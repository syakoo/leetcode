import { accumulate } from '../itertools'

// __________
//
describe('accumulate()', () => {
  test('accumulate([0, 1, 2, 3, 4, 5], (x, y) => x + y)', () => {
    const result = accumulate([0, 1, 2, 3, 4, 5], (x, y) => x + y)
    expect([...result]).toEqual([0, 1, 3, 6, 10, 15])
  })

  test('accumulate([1, 2, 3, 4, 5], (x, y) => x + y, 0)', () => {
    const result = accumulate([1, 2, 3, 4, 5], (x, y) => x + y, 0)
    expect([...result]).toEqual([0, 1, 3, 6, 10, 15])
  })

  test('accumulate([1n, 2n, 3n, 4n, 5n], (x, y) => x + y, 0n)', () => {
    const result = accumulate([1n, 2n, 3n, 4n, 5n], (x, y) => x + y, 0n)
    expect([...result]).toEqual([0n, 1n, 3n, 6n, 10n, 15n])
  })

  test("accumulate(['1', '2', '3', '4'], (x, y) => x + y)", () => {
    const result = accumulate(['1', '2', '3', '4'], (x, y) => x + y)
    expect([...result]).toEqual(['1', '12', '123', '1234'])
  })
})
