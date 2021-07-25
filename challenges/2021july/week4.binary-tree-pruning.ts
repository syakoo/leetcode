class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

type StackItem = [TreeNode, number]

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  const stack: StackItem[] = []
  stack.push([root, 0])
  while (stack.length) {
    const [tn, c] = stack.pop() as StackItem
    if (c === 0) {
      stack.push([tn, 1])
      if (tn.left) {
        stack.push([tn.left, 0])
      }
      if (tn.right) {
        stack.push([tn.right, 0])
      }
    } else {
      if (tn.left) {
        if (!tn.left.left && !tn.left.right && tn.left.val === 0) {
          tn.left = null
        }
      }
      if (tn.right) {
        if (!tn.right.left && !tn.right.right && tn.right.val === 0) {
          tn.right = null
        }
      }
    }
  }
  if (!root.left && !root.right && root.val === 0) {
    return null
  }

  return root
}
