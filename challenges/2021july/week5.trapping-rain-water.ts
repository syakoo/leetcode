function trap(height: number[]): number {
  const n = height.length
  const Lmaxs = [0]
  const Rmaxs = [0]

  for (let i = 0; i < height.length; i++) {
    Lmaxs.push(Math.max(height[i], Lmaxs[i]))
    Rmaxs.push(Math.max(height[n - i - 1], Rmaxs[i]))
  }

  let result = 0
  for (let i = 0; i < height.length; i++) {
    result += Math.max(0, Math.min(Lmaxs[i], Rmaxs[n - i]) - height[i])
  }
  return result
}
