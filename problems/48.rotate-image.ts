function* range(start: number, end: number, step = 1) {
  if ((start < end && step <= 0) || (start > end && step >= 0))
    throw new Error()

  const symbol = step > 0 ? 1 : -1
  for (let i = start * symbol; i < end * symbol; i += step * symbol) {
    yield i && i * symbol
  }
}

function rotate(matrix: number[][]): void {
  const [h, w] = [matrix.length, matrix[0].length]

  const result: number[][] = []
  for (const wi of range(0, w)) {
    const row = []
    for (const hi of range(h - 1, -1, -1)) {
      row.push(matrix[hi][wi])
    }
    result.push(row)
  }

  for (const wi of range(0, w)) {
    for (const hi of range(0, h)) {
      matrix[hi][wi] = result[hi][wi]
    }
  }
}
