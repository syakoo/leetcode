function canReorderDoubled(arr: number[]): boolean {
  const cnts: { [k: number]: number } = {}
  arr.forEach((x) => {
    if (!(x in cnts)) {
      cnts[x] = 1
    } else {
      cnts[x]++
    }
  })

  const arrSortedByAbs = arr.sort((a, b) => Math.abs(a) - Math.abs(b))
  for (const x of arrSortedByAbs) {
    if (cnts[x] === 0) continue
    cnts[x]--
    const k = x * 2
    if (!(k in cnts) || cnts[k] === 0) return false
    cnts[k]--
  }
  return true
}
