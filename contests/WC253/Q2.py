from typing import List
from heapq import *


class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        piles = list(-p for p in piles)
        heapify(piles)

        for _ in range(k):
            x = heappop(piles)
            heappush(piles, x//2)

        return -sum(piles)
