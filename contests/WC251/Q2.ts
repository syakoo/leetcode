function maximumNumber(num: string, change: number[]): string {
  let flg = 0
  const result = num.split('').map((c) => {
    const cn = +c
    if (change[cn] >= cn && flg < 2) {
      if (flg === 0) flg = 1
      return '' + change[cn]
    } else if (flg === 1) {
      flg = 2
    }
    return c
  })

  return result.join('')
}
