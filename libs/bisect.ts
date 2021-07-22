// __________
//
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

// __________
//
function bisectRight<T>(xs: T[], x: T) {
  let [l, r] = [-1, xs.length]

  while (r - l > 1) {
    const m = Math.floor((r + l) / 2)
    if (xs[m] > x) {
      r = m
    } else {
      l = m
    }
  }
  return r
}

// __________
//
export { bisectLeft, bisectRight }
