function minimumDifference(nums: number[], k: number): number {
  let result = 1 << 60
  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length - k + 1; i++) {
    result = Math.min(result, nums[i + k - 1] - nums[i])
  }

  return result
}
