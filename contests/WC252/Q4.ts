function countSpecialSubsequences(nums: number[]): number {
  const MOD = 10 ** 9 + 7
  const dp = [1, 0, 0, 0]

  nums.forEach((v) => {
    dp[v + 1] += dp[v + 1] + dp[v]
    dp[v + 1] %= MOD
  })

  return dp[3]
}
