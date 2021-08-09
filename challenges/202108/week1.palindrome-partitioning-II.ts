// uncleared

function minCut(s: string): number {
  const n = s.length
  const memo = [...Array(n)].map(() => [...Array(n + 1)].map(() => -1))

  function dfs(l: number, r: number): number {
    if (r - l <= 1) return 0
    if (r - l == 2) {
      return s[l] === s[r - 1] ? 0 : 1
    }
    if (memo[l][r] >= 0) return memo[l][r]

    let flg = true
    for (let i = l; i < l + Math.ceil((r - l) / 2); i++) {
      if (s[i] !== s[l + r - i - 1]) {
        flg = false
        break
      }
    }
    if (flg) return 0

    let res = Number.MAX_VALUE
    for (let i = l + 1; i < r; i++) {
      res = Math.min(res, dfs(l, i) + dfs(i, r) + 1)
    }
    memo[l][r] = res
    return res
  }

  return dfs(0, n)
}
