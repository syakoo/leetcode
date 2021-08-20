function makeFancyString(s: string): string {
  const result: string[] = []
  let cnt: { [key: string]: number } = {}

  for (const c of s.split('')) {
    if (c in cnt) {
      if (cnt[c] < 2) {
        cnt[c]++
        result.push(c)
      }
    } else {
      result.push(c)
      cnt = { [c]: 1 }
    }
  }

  return result.join('')
}
