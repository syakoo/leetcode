function groupAnagrams(strs: string[]): string[][] {
  const groups: string[][] = []
  const groupIdxs: { [key: string]: number } = {}

  for (const str of strs) {
    const key = str.split('').sort().join('')
    if (key in groupIdxs) {
      groups[groupIdxs[key]].push(str)
    } else {
      groupIdxs[key] = groups.length
      groups.push([str])
    }
  }

  return groups
}
