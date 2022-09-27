import { TreeNode } from "./type"

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const ans: number[] = []
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const size = que.length
    let sum = 0
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      sum += node.val
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
    ans.push(sum / size)
  }
  return ans
}