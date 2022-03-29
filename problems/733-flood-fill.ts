function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image
  const queue: [number, number][] = [[sr, sc]]
  while (queue.length) {
    const [r, c] = queue.shift()!
    if (image[r][c] === oldColor) {
      image[r][c] = newColor

      for (const [dr, dc] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const [nr, nc] = [r + dr, c + dc]
        if (
          0 <= nr &&
          nr < image.length &&
          0 <= nc &&
          nc < image[0].length &&
          image[nr][nc] === oldColor
        ) {
          queue.push([nr, nc])
        }
      }
    }
  }
  return image
}
