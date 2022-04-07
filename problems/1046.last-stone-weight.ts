function bisectLeft<T>(xs: T[], x: T) {
  let [l, r] = [-1, xs.length]

  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    if (xs[m] >= x) {
      r = m
    } else {
      l = m
    }
  }
  return r
}

function lastStoneWeight(stones: number[]): number {
  let stack: typeof stones = stones.sort((a, b) => a - b)

  while (stack.length > 1) {
    const a = stack.pop() as number
    const b = stack.pop() as number

    if (a === b) continue
    const xi = bisectLeft(stack, a - b)
    stack = [...stack.slice(0, xi), a - b, ...stack.slice(xi)]
    console.log(stack)
  }

  return stack.length > 0 ? stack[0] : 0
}
