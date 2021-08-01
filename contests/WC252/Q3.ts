function apples(i: number) {
  return 4 * (i * (((i + 1) * (i + 2)) / 2) + (i + 1) * ((i * (i - 1)) / 2))
}

function minimumPerimeter(neededApples: number): number {
  let [l, r] = [0, 10 ** 9]
  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    if (apples(m) >= neededApples) {
      r = m
    } else {
      l = m
    }
  }
  return r * 8
}
