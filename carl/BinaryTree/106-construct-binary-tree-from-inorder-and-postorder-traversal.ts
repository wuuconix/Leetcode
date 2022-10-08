import { TreeNode } from "./type"

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length == 0) {
    return null
  }
  const rootVal = postorder.pop()!
  const root = new TreeNode(rootVal)
  const pivot = inorder.indexOf(rootVal)
  const leftInorder = inorder.slice(0, pivot)
  const rightInorder = inorder.slice(pivot + 1)
  const leftPostorder = postorder.slice(0, pivot)
  const rightPostorder = postorder.slice(pivot) //cause postorder already pop before, so here slice all for right tree
  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)
  return root
}