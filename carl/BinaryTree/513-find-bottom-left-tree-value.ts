import { TreeNode } from "./type"

function findBottomLeftValue_recur(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let maxDepth = 0
  let ans = 0
  function traversal(node: TreeNode, depth: number) {
    if (!node.left && !node.right && depth > maxDepth) {
      ans = node.val
      maxDepth = depth
    }
    node.left && traversal(node.left, depth + 1)
    node.right && traversal(node.right, depth + 1)
  }
  traversal(root, 1)
  return ans
}

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const que: TreeNode[] = [root]
  let ans = 0
  while (que.length) {
    const size = que.length
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      if (i == 0) {
        ans = node.val
      }
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
  }
  return ans
}