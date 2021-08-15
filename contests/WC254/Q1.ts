function numOfStrings(patterns: string[], word: string): number {
  let cnt = 0
  patterns.forEach((p) => {
    if (word.includes(p)) {
      cnt += 1
    }
  })
  return cnt
}
