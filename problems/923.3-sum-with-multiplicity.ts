/*
 * @lc app=leetcode id=923 lang=typescript
 *
 * [923] 3Sum With Multiplicity
 */

const MOD = 10 ** 9 + 7
// @lc code=start
function threeSumMulti(arr: number[], target: number): number {
  const cnts: Record<number, number> = {}

  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j]
      ans += cnts[target - sum] || 0
      ans = ans % MOD
    }

    cnts[arr[i]] = (cnts[arr[i]] || 0) + 1
  }

  return ans
}
// @lc code=end
