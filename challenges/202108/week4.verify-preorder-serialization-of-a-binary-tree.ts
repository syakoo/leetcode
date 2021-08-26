function isValidSerialization(preorder: string): boolean {
  const values: string[] = preorder.split(',')
  let cur = 1
  function dfs(): boolean {
    if (cur > values.length - 2) return false
    for (let i = 0; i < 2; i++) {
      if (values[cur] !== '#') {
        cur++
        const res = dfs()
        if (!res) return false
      } else {
        cur++
      }
    }
    return true
  }

  const result = dfs()
  return result && cur === values.length
}
