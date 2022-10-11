import { TreeNode } from "./type"

function searchBST_recur(root: TreeNode | null, val: number): TreeNode | null {
  if (root == null || root.val == val) {
    return root
  }
  if (root.val > val) {
    return searchBST_recur(root.left, val)
  } else if (root.val < val) {
    return searchBST_recur(root.right, val)
  }
  return null
}

function searchBST_stack(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null
  }
  const stack: TreeNode[] = [root]
  while (stack.length) {
    const node = stack.pop()!
    if (node.val == val) {
      return node
    } else if (node.val < val) {
      node.right && stack.push(node.right)
    } else {
      node.left && stack.push(node.left)
    }
  }
  return null
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let node = root
  while (node != null) {
    if (node.val == val) {
      return node
    } else if (node.val < val) {
      node = node.right
    } else {
      node = node.left
    }
  }
  return null
}