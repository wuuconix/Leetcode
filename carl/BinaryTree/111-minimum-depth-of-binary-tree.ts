import { TreeNode } from "./type"

function minDepth_level(root: TreeNode | null): number {
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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  if (!root.left && root.right) {
    return 1 + minDepth(root.right)
  }
  if (root.left && !root.right) {
    return 1 + minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}