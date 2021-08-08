function minSwaps(s: string): number {
  const cnts = [0]
  s.split('').forEach((c, i) => {
    cnts.push(cnts[i] + (c === '[' ? 1 : -1))
  })
  return Math.ceil(-Math.min(...cnts) / 2)
}
