function stoneGame(piles: number[]): boolean {
  const n = piles.length
  const memo: { [k: string]: number } = {}

  function dfs(l: number, r: number) {
    const key = `${l}, ${r}`
    if (key in memo) {
      return memo[key]
    }
    if (l === r) return -piles[l]

    const left = dfs(l + 1, r)
    const right = dfs(l, r - 1)
    let res = 0
    if ((r - l) % 2 === 0) {
      res = Math.min(left - piles[l], right - piles[r])
    } else {
      res = Math.max(left + piles[l], right + piles[r])
    }
    
    memo[key] = res
    return res
  }

  const score = dfs(0, n - 1)
  return score > 0
}
