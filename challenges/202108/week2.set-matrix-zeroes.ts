/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rowMasks = matrix.map((row) => (row.includes(0) ? 0 : 1))
  const colMasks = [...Array(matrix[0].length)].map((_, i) => {
    for (const row of matrix) {
      if (row[i] === 0) return 0
    }
    return 1
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= rowMasks[i] * colMasks[j]
    }
  }
}
