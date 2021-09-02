function arrayNesting(nums: number[]): number {
  const n = nums.length
  const used = new Set<number>()
  let result = 0

  for (let i = 0; i < n; i++) {
    if (used.has(i)) continue
    let loop = 1
    let v = i
    used.add(v)

    while (!used.has(nums[v])) {
      loop += 1
      v = nums[v]
      used.add(v)
    }

    result = Math.max(result, loop)
  }

  return result
}
