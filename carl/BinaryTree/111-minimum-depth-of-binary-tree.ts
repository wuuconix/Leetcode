import { TreeNode } from "./type"

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let depth = 0
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    depth++
    const size = que.length
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
      if (!node.left && !node.right) {
        return depth
      }
    }
  }
  return depth
}