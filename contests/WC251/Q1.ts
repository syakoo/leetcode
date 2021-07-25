function* range(start: number, end: number, step = 1) {
  if ((start < end && step <= 0) || (start > end && step >= 0))
    throw new Error()

  const symbol = step > 0 ? 1 : -1
  for (let i = start * symbol; i < end * symbol; i += step * symbol) {
    yield i && i * symbol
  }
}

function getLucky(s: string, k: number): number {
  const alphas = 'abcdefghijklmnopqrstuvwxyz'

  let result = s
    .split('')
    .map((c) => `${alphas.indexOf(c) + 1}`)
    .join('')
  for (const _ of range(0, k)) {
    result = result
      .split('')
      .reduce((prev, cur) => prev + Number(cur), 0)
      .toString()
  }

  return Number(result)
}
