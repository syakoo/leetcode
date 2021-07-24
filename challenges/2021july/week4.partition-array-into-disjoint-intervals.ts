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

function partitionDisjoint(nums: number[]): number {
  const n = nums.length
  const maxs = [...accumulate(nums, (x, y) => Math.max(x, y))]
  const mins = [...accumulate(nums.reverse(), (x, y) => Math.min(x, y))]

  for (let i = 0; i < n; i++) {
    if (maxs[i] <= mins[n - i - 2]) {
      return i + 1
    }
  }
  return -1
}
