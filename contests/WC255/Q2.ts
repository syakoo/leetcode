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

function findDifferentBinaryString(nums: string[]): string {
  const bins = new Set(nums)

  for (const bit of [...product([['0', '1']], nums.length)]) {
    const str = bit.join('')
    if (!bins.has(str)) return str
  }
  return ''
}
