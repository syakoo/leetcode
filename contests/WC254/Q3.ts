// uncleared

function expmod(base: bigint, exp: bigint, mod: bigint): bigint {
  if (exp == 0n) return 1n
  if (exp % 2n == 0n) {
    return expmod(base, exp / 2n, mod) ** 2n % mod
  } else {
    return (base * expmod(base, exp - 1n, mod)) % mod
  }
}

function minNonZeroProduct(p: number): number {
  const MOD = BigInt(10 ** 9 + 7)
  return Number(
    (expmod(BigInt((1 << p) - 2), BigInt((1 << p) - 2) / 2n, MOD) *
      BigInt((1 << p) - 1)) %
      MOD
  )
}
