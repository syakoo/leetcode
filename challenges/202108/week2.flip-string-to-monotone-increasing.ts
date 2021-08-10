function minFlipsMonoIncr(s: string): number {
  const n = s.length
  const zeros = [...Array(n + 1)].map(() => 0)

  s.split('').forEach((c, i) => {
    zeros[i + 1] = zeros[i]
    if (c === '0') {
      zeros[i + 1]++
    }
  })

  const result = Math.min(...zeros.map((cnt, i) => i - cnt + zeros[n] - cnt))
  return result
}
