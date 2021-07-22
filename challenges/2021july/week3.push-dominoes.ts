/**
 * bisect を作ったのでそれを使って解いた。
 */
function bisectLeft<T>(xs: T[], x: T) {
  let [l, r] = [-1, xs.length]

  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    if (xs[m] >= x) {
      r = m
    } else {
      l = m
    }
  }
  return r
}

function pushDominoes(dominoes: string): string {
  const Ls = [-1]
  const Rs = [-1]
  dominoes.split('').forEach((domino, i) => {
    if (domino === 'R') {
      Rs.push(i)
    } else if (domino === 'L') {
      Ls.push(i)
    }
  })
  Ls.push(Infinity)
  Rs.push(Infinity)

  const result = dominoes.split('').map((d, i) => {
    if (d !== '.') return d
    const li = bisectLeft(Ls, i)
    const ri = bisectLeft(Rs, i)
    let l = Ls[li] > Rs[ri] ? null : Ls[li]
    let r = Ls[li - 1] > Rs[ri - 1] ? null : Rs[ri - 1]

    if (l === Infinity) l = null
    if (r === -1) r = null
    if (l === null && r === null) {
      return '.'
    } else if (l === null) {
      return 'R'
    } else if (r === null) {
      return 'L'
    } else if (i - l === r - i) {
      return '.'
    } else if (i - l > r - i) {
      return 'L'
    } else {
      return 'R'
    }
  })
  return result.join('')
}
