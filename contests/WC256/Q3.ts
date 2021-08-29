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

function minSessions(tasks: number[], sessionTime: number): number {
  let subtasks = [...tasks]
  let result = 0

  while (subtasks.length > 0) {
    console.log(subtasks)
    let opt = 0
    let nextTasks: number[] = []

    for (const pickedTasks of product([[0, 1]], subtasks.length)) {
      let sum = pickedTasks.reduce(
        (s, t, i) => s + (t === 1 ? subtasks[i] : 0),
        0
      )

      if (sum <= sessionTime && sum > opt) {
        opt = sum
        nextTasks = subtasks.filter((_, i) => pickedTasks[i] === 0)
      }
    }

    subtasks = nextTasks
    result++
  }

  return result
}
