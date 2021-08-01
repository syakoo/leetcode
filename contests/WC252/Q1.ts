function isThree(n: number): boolean {
  let set = new Set()
  for (let i = 0; i < Math.round(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      set.add(i)
      set.add(Math.round(n / i))
    }
  }
  return [...set].length === 3
}
