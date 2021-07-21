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

function subsets(nums: number[]): number[][] {
  const n = nums.length
  const result = []

  for (const bits of product([[0, 1]], n)) {
    result.push(
      bits.reduce<number[]>((sets, bit, i) => {
        if (bit) {
          sets.push(nums[i])
        }
        return sets
      }, [])
    )
  }

  return result
}
