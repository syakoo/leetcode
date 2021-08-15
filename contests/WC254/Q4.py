from collections import deque
from typing import List


def check(waters: set, col: int, row: int):
    used = [[0]*col for _ in range(row)]
    starts = [[0, i] for i in range(col) if str([0, i]) not in waters]
    q = deque(starts)

    for h, w in starts:
        used[h][w] = 1

    while q:
        hi, wi = q.popleft()

        for dh, dw in [[0, -1], [0, 1], [1, 0], [-1, 0]]:
            nh, nw = hi + dh, wi + dw

            if 0 <= nh < row and 0 <= nw < col and used[nh][nw] == 0 and str([nh, nw]) not in waters:
                used[nh][nw] = 1
                q.append([nh, nw])
                if nh == row - 1:
                    return True

    return False


class Solution:
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        l, r = 0, len(cells)
        while (r - l > 1):
            m = (r + l) // 2
            wss = set()
            for i in range(m):
                wss.add(str([cells[i][0] - 1, cells[i][1] - 1]))

            if (check(wss, col, row)):
                l = m
            else:
                r = m

        return l
