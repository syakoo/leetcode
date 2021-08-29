function geq(a: string, b: string): number {
  if (a.length > b.length) return -1
  if (b.length > a.length) return 1

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) return -1
    if (a[i] < b[i]) return 1
  }
  return -1
}

function kthLargestNumber(nums: string[], k: number): string {
  return nums.sort((a, b) => geq(a, b))[k - 1]
}
