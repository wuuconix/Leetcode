import { TreeNode } from "./type"

function inorderTraversal(root: TreeNode | null): number[] {
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