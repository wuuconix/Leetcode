import { TreeNode } from "./type"

function hasPathSum_recur(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }
  if (!root.left && !root.right && root.val == targetSum) {
    return true
  }
  return hasPathSum_recur(root.left, targetSum - root.val) || hasPathSum_recur(root.right, targetSum - root.val)
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }
  const stack: TreeNode[] = [root]
  const pathDiffs: number[] = [targetSum - root.val] //the path sum's difference with targetSum, it equal to 0, find the target
  while (stack.length) {
    const node = stack.pop()!
    const pathDiff = pathDiffs.pop()!
    if (!node.left && !node.right && pathDiff == 0) {
      return true
    }
    if (node.right) {
      stack.push(node.right)
      pathDiffs.push(pathDiff - node.right.val)
    }
    if (node.left) {
      stack.push(node.left)
      pathDiffs.push(pathDiff - node.left.val)
    }
  }
  return false
}