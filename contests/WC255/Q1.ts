function gcd(a: number, b: number): number {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

function findGCD(nums: number[]): number {
  return gcd(Math.min(...nums), Math.max(...nums))
}
