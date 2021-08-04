// Definition for node.
export class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

function levelOrder(root: Node | null): number[][] {
  if (!root) return []
  let from: Node[] = [root]
  let to: Node[] = []
  const result: number[][] = []

  while (from.length) {
    result.push(from.map((node) => node.val))

    from.forEach((node) => {
      node.children.forEach((nj) => to.push(nj))
    })
    from = to
    to = []
  }

  return result
}
