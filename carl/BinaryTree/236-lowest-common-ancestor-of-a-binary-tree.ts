import { TreeNode } from "./type"

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || root == p || root == q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) {
    return root
  } else if (left && !right) {
    return left
  } else if (!left && right) {
    return right
  } else {
    return null
  }
}