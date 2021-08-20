function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const digits = new Set()
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (digits.has(board[i][j])) return false
        digits.add(board[i][j])
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    const digits = new Set()
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        if (digits.has(board[j][i])) return false
        digits.add(board[j][i])
      }
    }
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const digits = new Set()
      for (let di = 0; di < 3; di++) {
        for (let dj = 0; dj < 3; dj++) {
          if (board[i + di][j + dj] !== '.') {
            if (digits.has(board[i + di][j + dj])) return false
            digits.add(board[i + di][j + dj])
          }
        }
      }
    }
  }

  return true
}
