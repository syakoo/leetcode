function maxArea(height: number[]): number {
  const n = height.length
  const indexedHeights = height.map((v, i) => [v, i] as const)
  const sortedIndexedHeights = indexedHeights.sort((a, b) => b[0] - a[0])

  let l = n
  let r = -1
  let ans = 0
  for (const [h, i] of sortedIndexedHeights) {
    ans = Math.max(ans, (i - l) * h, (r - i) * h)
    l = Math.min(l, i)
    r = Math.max(r, i)
  }
  return ans
}
