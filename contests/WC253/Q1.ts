function isPrefixString(s: string, words: string[]): boolean {
  let l = 0
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (l >= s.length || s[l] !== word[i]) return false
      l++
    }
    if (l === s.length) return true
  }
  return l === s.length
}
