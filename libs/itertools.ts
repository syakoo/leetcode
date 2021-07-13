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

export { accumulate, combinations }
