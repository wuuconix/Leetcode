import { TreeNode } from "./type"

function postorderTraversal(root: TreeNode | null): number[] {
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