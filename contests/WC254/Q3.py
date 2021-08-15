class Solution:
    def minNonZeroProduct(self, p: int) -> int:
        MOD = 10**9 + 7
        return pow((1 << p)-2, ((1 << p) - 1) // 2, MOD) * ((1 << p) - 1) % MOD