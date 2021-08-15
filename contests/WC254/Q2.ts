function rearrangeArray(nums: number[]): number[] {
  const sortedNums = nums.sort((a, b) => a - b)
  const result: number[] = []

  for (let i = 0; i < sortedNums.length / 2; i++) {
    result.push(sortedNums[i])
    if (i !== sortedNums.length - i - 1)
      result.push(sortedNums[sortedNums.length - i - 1])
  }

  return result
}
