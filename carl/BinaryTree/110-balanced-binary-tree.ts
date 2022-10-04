import { TreeNode } from "./type"

function isBalanced_recur(root: TreeNode | null): boolean {
  return getDepth_recur(root) == -1 ? false : true
}

function getDepth_recur(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const leftDepth = getDepth_recur(root.left)
  const rightDepth = getDepth_recur(root.right)
  if (leftDepth == -1 || rightDepth == -1) {
    return -1
  }
  if (Math.abs(leftDepth - rightDepth) <= 1) {
    return 1 + Math.max(leftDepth, rightDepth)
  } else {
    return -1
  }
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const stack: TreeNode[] = [root]
  while (stack.length != 0) {
    const node = stack.pop()!
    if (Math.abs(getDepth(node.left) - getDepth(node.right)) > 1) {
      return false
    }
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return true
}

function getDepth(root: TreeNode | null): number {
  const stack: (TreeNode | null)[] = [root]
  let ans = 0, depth = 0
  while (stack.length != 0) {
    const node = stack.pop()
    if (node) {
      depth++
      stack.push(node)
      stack.push(null)
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    } else {
      stack.pop()
      depth--
    }
    ans = Math.max(ans, depth)
  }
  return ans
}