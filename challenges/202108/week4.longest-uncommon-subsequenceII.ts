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

function findLUSlength(strs: string[]): number {
  const substrs: Set<string>[] = []

  for (const str of strs) {
    const subs = new Set<string>(
      [...product(str.split('').map((c) => ['', c]))].map((cs) => cs.join(''))
    )
    substrs.push(subs)
  }

  function isUnique(str: string, idx: number) {
    for (let i = 0; i < substrs.length; i++) {
      if (i === idx) continue
      if (substrs[i].has(str)) return false
    }
    return true
  }

  let ans = -1
  substrs.forEach((subs, i) => {
    for (const str of subs) {
      if (str.length <= ans) continue
      if (isUnique(str, i)) {
        ans = str.length
      }
    }
  })

  return ans
}
