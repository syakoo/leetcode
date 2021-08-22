function minimizeTheDifference(mat: number[][], target: number): number {
  const MOD = 10000
  let dp = [...Array(MOD)].fill(0)
  dp[0] = 1

  for (const row of mat) {
    let cur = [...Array(MOD)].fill(0)
    for (const val of row) {
      dp.forEach((v, i) => {
        if (v === 0) return
        if (i + val >= MOD) return
        cur[i + val] = 1
      })
    }
    dp = [...cur]
  }

  let result = 1 << 60
  dp.forEach((v, i) => {
    if (v === 0) return
    result = Math.min(result, Math.abs(target - i))
  })

  return result
}
