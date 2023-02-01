import { TreeNode } from "./type"

function rob(root: TreeNode | null): number {
  const dp: number[] = traversal(root)
  return Math.max(dp[0], dp[1])
}

function traversal(root: TreeNode | null): number[] {
  if (!root) {
    return [0, 0]
  } else {
    const left = traversal(root.left)
    const right = traversal(root.right)
    const notUse = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const use = left[0] + right[0] + root.val
    return [notUse, use]
  }
}