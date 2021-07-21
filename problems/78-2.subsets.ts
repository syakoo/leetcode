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

function* range(start: number, end: number, step = 1) {
  if ((start < end && step <= 0) || (start > end && step >= 0))
    throw new Error()

  const symbol = step > 0 ? 1 : -1
  for (let i = start * symbol; i < end * symbol; i += step * symbol) {
    yield i && i * symbol
  }
}

function subsets(nums: number[]): number[][] {
  const n = nums.length
  const result = []

  for (const r of range(0, n+1)) {
    result.push(...combinations(nums, r))
  }

  return result
}
