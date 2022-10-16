import { TreeNode } from "./type"

function lowestCommonAncestor_recur(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) {
    return root
  }
  if (root.val < p.val && root.val < q.val) {
    const right = lowestCommonAncestor_recur(root.right, p, q)
    if (right) {
      return right
    }
  } else if (root.val > q.val && root.val > p.val) {
    const left = lowestCommonAncestor_recur(root.left, p, q)
    if (left) {
      return left
    }
  } else {
    return root
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!p || !q) {
    return root
  }
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else if (root.val > q.val && root.val > p.val) {
      root = root.left
    } else {
      return root
    }
  }
  return null
}