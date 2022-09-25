import { TreeNode } from "./type"

function inorderTraversal_recur(root: TreeNode | null): number[] {
  const ans: number[] = []
  function recur(node: TreeNode | null) {
    if (node == null) {
      return
    }
    recur(node.left)
    ans.push(node.val)
    recur(node.right)
  }
  recur(root)
  return ans
}

function inorderTraversal_norecur(root: TreeNode | null): number[] {
  if (root == null) {
    return []
  }
  const stack: TreeNode[] = []
  const ans: number[] = []
  let p: TreeNode | null = root
  while (p != null || stack.length != 0) {
    if (p != null) {
      stack.push(p)
      p = p.left
    } else {
      p = stack.pop()!
      ans.push(p.val)
      p = p.right
    }
  }
  return ans
}

/**
 * Unified Iteration Way
 * @param root 
 */
function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) {
    return []
  }
  const ans: number[] = []
  const stack: (TreeNode | null)[] = [root]
  while (stack.length != 0) {
    let node = stack.pop()
    if (node != null) {
      node.right && stack.push(node.right)
      stack.push(node)
      stack.push(null)
      node.left && stack.push(node.left)
    } else {
      node = stack.pop()!
      ans.push(node.val)
    }
  }
  return ans
}