import { accumulate, combinations, product } from '../itertools'

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

// __________
//
describe('combinations()', () => {
  test('combinations([0, 1, 2, 3, 4], 1)', () => {
    const result = combinations([0, 1, 2, 3, 4], 1)
    expect([...result]).toEqual([[0], [1], [2], [3], [4]])
  })

  test('combinations([0, 1, 2, 3, 4], 3)', () => {
    const result = combinations([0, 1, 2, 3, 4], 3)
    expect([...result]).toEqual([
      [0, 1, 2],
      [0, 1, 3],
      [0, 1, 4],
      [0, 2, 3],
      [0, 2, 4],
      [0, 3, 4],
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
    ])
  })

  test('combinations([0, 1, 2, 3, 4], 5)', () => {
    const result = combinations([0, 1, 2, 3, 4], 5)
    expect([...result]).toEqual([[0, 1, 2, 3, 4]])
  })

  test('combinations([0, 1, 2, 3, 4], 6)', () => {
    const result = combinations([0, 1, 2, 3, 4], 6)
    expect([...result]).toEqual([])
  })
})

// __________
//
describe('product()', () => {
  test('product([[0, 1, 2]])', () => {
    const result = product([[0, 1, 2]])
    expect([...result]).toEqual([[0], [1], [2]])
  })

  test('product([[0, 1, 2]], 1)', () => {
    const result = product([[0, 1, 2]], 1)
    expect([...result]).toEqual([[0], [1], [2]])
  })

  test('product([[0, 1, 2]], 2)', () => {
    const result = product([[0, 1, 2]], 2)
    expect([...result]).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ])
  })

  test("product([['0', '1', '2'], ['3', '4', '5']])", () => {
    const result = product([
      ['0', '1', '2'],
      ['3', '4', '5'],
    ])
    expect([...result]).toEqual([
      ['0', '3'],
      ['0', '4'],
      ['0', '5'],
      ['1', '3'],
      ['1', '4'],
      ['1', '5'],
      ['2', '3'],
      ['2', '4'],
      ['2', '5'],
    ])
  })

  test('product([[0, 1]], 5)', () => {
    const result = product([[0, 1]], 5)
    expect([...result]).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 1, 1],
      [1, 0, 1, 0, 0],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
    ])
  })
})
