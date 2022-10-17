import { TreeNode } from "./type"

function insertIntoBST_recur(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }
  if (root.val > val) {
    root.left = insertIntoBST_recur(root.left, val)
  } else if (root.val < val) {
    root.right = insertIntoBST_recur(root.right, val)
  }
  return root
}

function insertIntoBST_iterator(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }
  let pre: TreeNode | null = null
  let cur: TreeNode | null = root
  while (cur) {
    pre = cur
    if (cur.val < val) {
      cur = cur.right
    } else {
      cur = cur.left
    }
  }
  if (pre!.val < val) {
    pre!.right = new TreeNode(val) 
  } else {
    pre!.left = new TreeNode(val)
  }
  return root
}

function insertIntoBST_recur_void(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }
  let pre: TreeNode | null = null
  function recur(node: TreeNode | null) {
    if (!node) {
      if (pre!.val < val) {
        pre!.right = new TreeNode(val)
      } else {
        pre!.left = new TreeNode(val)
      }
      return
    }
    pre = node
    if (node.val < val) {
      recur(node.right)
    } else {
      recur(node.left)
    }
  }
  recur(root)
  return root
}