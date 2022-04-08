function bisectLeft<T>(xs: T[], x: T) {
  let [l, r] = [-1, xs.length]

  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    if (xs[m] >= x) {
      l = m
    } else {
      r = m
    }
  }
  return r
}

class KthLargest {
  nums: number[] = []
  k: number = 0

  constructor(k: number, nums: number[]) {
    this.nums = nums.sort((a, b) => b - a)
    this.k = k - 1
  }

  add(val: number): number {
    const pos = bisectLeft(this.nums, val)
    this.nums = [...this.nums.slice(0, pos), val, ...this.nums.slice(pos)]

    return this.nums[this.k]
  }
}
