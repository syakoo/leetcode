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
function totalVal(root: TreeNode): number {
  let result = 0
  let stack = [root]
  while (stack.length > 0) {
    const node = stack.pop()
    result += node?.val || 0

    if (node?.left) {
      stack.push(node.left)
    }
    if (node?.right) {
      stack.push(node.right)
    }
  }

  return result
}

function maxProduct(root: TreeNode | null): number {
  let max = 0n
  if (root === null) {
    return 0
  }
  const total = totalVal(root)

  function dfs(node: TreeNode): number {
    let result = node.val

    if (node.left) {
      result += dfs(node.left)
    }
    if (node.right) {
      result += dfs(node.right)
    }
    const val = BigInt(result) * BigInt(total - result)
    if (val > max) max = val
    return result
  }

  dfs(root)
  return Number(max % 1000_000_007n)
}
