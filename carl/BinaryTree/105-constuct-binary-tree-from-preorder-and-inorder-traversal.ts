import { TreeNode } from "./type"

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length == 0) {
    return null
  }
  const rootVal = preorder.shift()!
  const root = new TreeNode(rootVal)
  const pivot = inorder.indexOf(rootVal)
  const leftInorder = inorder.slice(0, pivot)
  const rightInorder = inorder.slice(pivot + 1)
  const leftPreorder = preorder.slice(0, pivot)
  const rightPreorder = preorder.slice(pivot)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
}

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
buildTree(preorder, inorder)