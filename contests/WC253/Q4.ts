function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
  const dp = [...Array(obstacles.length + 1)].map(() => -1)
  dp[0] = 0
  let r = 0

  const result = obstacles.map((o) => {
    let i = r
    while (i >= 0 && dp[i] > o) {
      i -= 1
    }
    if (i === r) r++
    if (dp[i + 1] === -1 || dp[i + 1] > o) {
      dp[i + 1] = o
    }

    return i + 1
  })

  return result
}
