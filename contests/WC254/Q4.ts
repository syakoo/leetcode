type Coeff = [number, number]

function latestDayToCross(row: number, col: number, cells: Coeff[]): number {
  function isConnected(waters: Set<string>) {
    const visited = [...Array(row)].map(() => [...Array(col)].fill(false))
    const tops: Coeff[] = [...Array(col)]
      .map((_, i): Coeff => [0, i])
      .filter((_, i) => !waters.has(`0,${i}`))
    const stack: Coeff[] = tops
    tops.forEach(([h, w]) => {
      visited[h][w] = true
    })

    while (stack.length > 0) {
      const [h, w] = stack.pop() as unknown as Coeff
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
          nw < col &&
          !visited[nh][nw] &&
          !waters.has(`${nh},${nw}`)
        ) {
          visited[nh][nw] = true
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
    const waters = new Set<string>()
    for (let i = 0; i < m; i++) {
      waters.add(`${cells[i][0] - 1},${cells[i][1] - 1}`)
    }

    if (isConnected(waters)) {
      l = m
    } else {
      r = m
    }
  }

  return l
}
