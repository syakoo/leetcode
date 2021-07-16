// __________
//
function* accumulate<T>(
  iterable: Iterable<T>,
  func: (x: T, y: T) => T,
  initial?: T
) {
  let x = initial
  if (x !== undefined) yield x

  for (let y of iterable) {
    x = x === undefined ? y : func(x, y)
    yield x
  }
}

// __________
//
function* combinations<T>(iterable: Iterable<T>, r: number) {
  const pool = [...iterable]
  const n = pool.length
  if (n < r) return

  const indices = [...new Array(r)].map((_, i) => i)
  yield indices.map((i) => pool[i])
  while (true) {
    let i
    for (i = r - 1; i >= 0; i--) {
      if (indices[i] !== n - (r - i)) {
        break
      }
    }
    if (i === -1) return
    indices[i]++
    for (let j = i + 1; j < r; j++) {
      indices[j] = indices[j - 1] + 1
    }
    yield indices.map((i) => pool[i])
  }
}

// __________
//
function* product<T>(iterables: Iterable<T>[], repeat = 1) {
  const pools = iterables.map((iter) => [...iter])
  const lens = pools.map((pool) => pool.length)
  const indices = [...new Array(pools.length * repeat)].fill(0)
  const n = indices.length
  const result = indices.map((v, i) => pools[Math.floor(i / repeat)][v])
  yield result
  while (true) {
    let i
    for (i = n - 1; i >= 0; i--) {
      if (indices[i] === lens[Math.floor(i / repeat)] - 1) {
        indices[i] = 0
        result[i] = pools[Math.floor(i / repeat)][0]
      } else {
        break
      }
    }
    if (i === -1) return
    indices[i]++
    result[i] = pools[Math.floor(i / repeat)][indices[i]]
    yield [...result]
  }
}

export { accumulate, combinations, product }
