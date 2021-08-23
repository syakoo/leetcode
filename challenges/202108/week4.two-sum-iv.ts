/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false
  const values: Set<number> = new Set()

  const stack: TreeNode[] = [root]
  while (stack.length) {
    const v = stack.pop() as TreeNode

    if (values.has(k - v.val)) return true
    values.add(v.val)

    if (v.left) {
      stack.push(v.left)
    }
    if (v.right) {
      stack.push(v.right)
    }
  }

  return false
}
