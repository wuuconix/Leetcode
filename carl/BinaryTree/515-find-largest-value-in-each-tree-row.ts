import { TreeNode } from "./type"

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const ans: number[] = []
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const size = que.length
    let max: number = -Infinity
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
      max = Math.max(max, node.val)
    }
    ans.push(max)
  }
  return ans
}