import { TreeNode } from "./type"

function postorderTraversal_recur(root: TreeNode | null): number[] {
  const ans: number[] = []
  function recur(node: TreeNode | null) {
    if (node == null) {
      return
    }
    recur(node.left)
    recur(node.right)
    ans.push(node.val)
  }
  recur(root)
  return ans
}

function postorderTraversal_norecur(root: TreeNode | null): number[] {
  if (root == null) {
    return []
  }
  const stack: TreeNode[] = [root]
  const ans: number[] = []
  while (stack.length != 0) {
    const node = stack.pop()!
    ans.push(node.val)
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  return ans.reverse()
}

function postorderTraversal(root: TreeNode | null): number[] {
  if (root == null) {
    return []
  }
  const ans: number[] = []
  const stack: (TreeNode | null)[] = [root]
  while (stack.length != 0) {
    let node = stack.pop()
    if (node != null) {
      stack.push(node)
      stack.push(null)
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    } else {
      node = stack.pop()!
      ans.push(node.val)
    }
  }
  return ans
}