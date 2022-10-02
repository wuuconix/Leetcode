import { TreeNode } from "./type"

function maxDepth_level(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let ans: number = 0
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    ans++
    const size = que.length
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
  }
  return ans
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}