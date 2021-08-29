function* range(start: number, end: number, step = 1) {
  if ((start < end && step <= 0) || (start > end && step >= 0))
    throw new Error()

  const symbol = step > 0 ? 1 : -1
  for (let i = start * symbol; i < end * symbol; i += step * symbol) {
    yield i && i * symbol
  }
}

function numberOfUniqueGoodSubsequences(binary: string): number {
  const n = binary.length
  const MOD = 10 ** 9 + 7

  const next = [...Array(n)].map(() => [-1, -1])
  for (const i of range(n - 2, -1, -1)) {
    next[i][0] = next[i + 1][0]
    next[i][1] = next[i + 1][1]

    next[i][+binary[i + 1]] = i + 1
  }

  const dp = [...Array(n + 1)].fill(0)
  let start = binary[0] === '1' ? 0 : next[0][1]
  if (start < 0) return 1
  dp[start] = 1

  for (const i of range(start, n)) {
    if (next[i][0] > 0) {
      dp[next[i][0]] += dp[i]
      dp[next[i][0]] %= MOD
    }
    if (next[i][1] > 0) {
      dp[next[i][1]] += dp[i]
      dp[next[i][1]] %= MOD
    }
  }

  let result = dp.reduce((s, v) => (s + v) % MOD)
  if (binary.includes('0')) result += 1
  return result % MOD
}
