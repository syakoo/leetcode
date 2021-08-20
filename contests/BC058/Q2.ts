function checkMove(
  board: string[][],
  rMove: number,
  cMove: number,
  color: string
): boolean {
  const h = board.length
  const w = board[0].length
  const cocolor = color === 'W' ? 'B' : 'W'
  const directions = [
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
  ]
  for (const [dh, dw] of directions) {
    let [nh, nw] = [rMove + dh, cMove + dw]
    if (!(0 <= nh && nh < h && 0 <= nw && nw < w) || board[nh][nw] !== cocolor)
      continue
    while (0 <= nh && nh < h && 0 <= nw && nw < w) {
      if (board[nh][nw] === '.') {
        break
      }
      if (board[nh][nw] === color) return true
      nh += dh
      nw += dw
    }
  }

  return false
}
