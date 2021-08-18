function numDecodings(s: string): number {
  const n = s.length
  const nums = new Set([...Array(26)].map((_, i) => (i + 1).toString()))
  const dp = [...Array(n + 1)].fill(0)
  dp[0] = 1
  dp[1] = nums.has(s[0]) ? 1 : 0
  for (let i = 2; i < n + 1; i++) {
    if (nums.has(s[i - 1])) {
      dp[i] += dp[i - 1]
    }
    if (nums.has(s[i - 2] + s[i - 1])) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[n]
}
