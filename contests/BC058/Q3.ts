function minSpaceWastedKResizing(nums: number[], k: number): number {
  const memo: { [key: string]: number } = {}

  const dfs = (l: number, ki: number) => {
    const key = JSON.stringify([l, ki])
    if (key in memo) return memo[key]
    if (nums.length - l <= ki) return 0

    let res = 1 << 60
    let mx = 0
    let sum = 0
    for (let i = l; i < nums.length; i++) {
      mx = Math.max(mx, nums[i])
      sum += nums[i]

      if (ki > 0) {
        res = Math.min(res, mx * (i - l + 1) - sum + dfs(i + 1, ki - 1))
      }
    }
    res = Math.min(res, mx * (nums.length - l) - sum)

    memo[key] = res
    return res
  }

  const result = dfs(0, k)
  return result
}
