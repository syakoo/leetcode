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

function subsetsWithDup(nums: number[]): number[][] {
  const set = new Set<string>(['[]'])

  for (let i = 1; i <= nums.length; i++) {
    ;[...combinations(nums, i)].forEach((ns) =>
      set.add(JSON.stringify(ns.sort((a, b) => a - b)))
    )
  }
  return [...set].map((item) => JSON.parse(item))
}
