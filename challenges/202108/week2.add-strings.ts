function addStrings(num1: string, num2: string): string {
  const n1 = num1.length
  const n2 = num2.length
  const mxDigits = Math.max(n1, n2)
  let c = 0
  const result = []
  for (let i = 0; i < mxDigits; i++) {
    let d = c
    if (i < n1) {
      d += +num1[n1 - i - 1]
    }
    if (i < n2) {
      d += +num2[n2 - i - 1]
    }
    c = d >= 10 ? 1 : 0
    d %= 10
    result.push(d.toString())
  }
  if (c > 0) {
    result.push(c.toString())
  }

  return result.reverse().join('')
}
