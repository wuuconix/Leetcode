import { TreeNode } from "./type"

function sumOfLeftLeaves_recur(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves_recur(root.right)
  }
  return sumOfLeftLeaves_recur(root.left) + sumOfLeftLeaves_recur(root.right)
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const stack: TreeNode[] = [root]
  let ans: number = 0
  while (stack.length) {
    const node = stack.pop()!
    if (node.left && !node.left.left && !node.left.right) {
      ans += node.left.val
    }
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return ans
}