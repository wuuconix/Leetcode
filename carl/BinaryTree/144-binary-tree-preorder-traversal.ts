import { TreeNode } from "./type"

function preorderTraversal_recur(root: TreeNode | null): number[] {
  const ans: number[] = []
  function recur(node: TreeNode | null) {
    if (node == null) {
      return
    }
    ans.push(node.val)
    recur(node.left)
    recur(node.right)
  }
  recur(root)
  return ans
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const stack: TreeNode[] = [root]
  const ans: number[] = []
  while (stack.length != 0) {
    const node = stack.pop()!
    ans.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return ans
}