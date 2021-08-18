// uncleared

function removeBoxes(boxes: number[]): number {
  const n = boxes.length
  const memo: { [k: string]: number } = {}

  function dfs(deleted: Set<number>): number {
    const key = [...deleted.values()].sort((a, b) => a - b).toString()
    if (memo[key] > 0) return memo[key]
    if (deleted.size > n - 2) return n - deleted.size

    let result = 1
    let [l, r] = [0, 0]
    while (l < n) {
      if (deleted.has(l)) {
        l++
        continue
      }
      r = l
      let cnt = 0
      const colors = new Set<number>()
      while (r < n && (deleted.has(r) || boxes[l] === boxes[r])) {
        if (!deleted.has(r)) {
          cnt++
          colors.add(r)
          deleted.add(r)
        }
        r++
      }

      result = Math.max(result, dfs(deleted) + cnt * cnt)
      for (const i of colors) {
        deleted.delete(i)
      }
      l = r
    }

    memo[key] = result
    return result
  }

  console.log()
  return dfs(new Set())
}
