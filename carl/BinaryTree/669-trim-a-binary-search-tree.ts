import { TreeNode } from "./type"

function trimBST_recur(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null
  }
  if (root.val > high) {
    return trimBST_recur(root.left, low, high)
  }
  if (root.val < low) {
    return trimBST_recur(root.right, low, high)
  }
  root.left = trimBST_recur(root.left, low, high)
  root.right = trimBST_recur(root.right, low, high)
  return root
}

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  while (root && (root.val > high || root.val < low)) {
    if (root.val > high) {
      root = root.left
    } else {
      root = root.right
    }
  }
  let cur = root
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right
    }
    cur = cur.left
  }
  cur = root
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left
    }
    cur = cur.right
  }
  return root
}