function latestDayToCross(row: number, col: number, cells: number[][]): number {
  function check(waters: Set<string>) {
    const used = [...Array(row)].map(() => [...Array(col)].fill(0))
    const starts = [...Array(col)]
      .map((_, i): [number, number] => [0, i])
      .filter((_, i) => !waters.has(`0,${i}`))
    const stack: [number, number][] = starts
    starts.forEach(([h, w]) => (used[h][w] = 1))

    while (stack.length > 0) {
      const [h, w] = stack.pop() as unknown as number[]
      for (const [dh, dw] of [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const [nh, nw] = [h + dh, w + dw]

        if (
          0 <= nh &&
          nh < row &&
          0 <= nw &&
          nw <= col &&
          used[nh][nw] === 0 &&
          !waters.has(`${nh},${nw}`)
        ) {
          used[nh][nw] = 1
          stack.push([nh, nw])
          if (nh === row - 1) {
            return true
          }
        }
      }
    }
    return false
  }

  let [l, r] = [0, cells.length]
  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    const ws = new Set<string>()
    for (let i = 0; i < m; i++) {
      ws.add(`${cells[i][0] - 1},${cells[i][1] - 1}`)
    }
    if (check(ws)) {
      l = m
    } else {
      r = m
    }
  }
  return l
}
