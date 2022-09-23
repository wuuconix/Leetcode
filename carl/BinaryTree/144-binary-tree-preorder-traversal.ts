import { TreeNode } from "./type"

function preorderTraversal(root: TreeNode | null): number[] {
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