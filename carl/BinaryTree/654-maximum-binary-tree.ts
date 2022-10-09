import { TreeNode } from "./type"

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length == 0) {
    return null
  }
  let max = -1, pivot = 0
  nums.forEach((val, index) => {
    if (val > max) {
      max = val
      pivot = index
    }
  })
  const root = new TreeNode(max)
  const leftNums = nums.slice(0, pivot)
  const rightNums = nums.slice(pivot + 1)
  root.left = constructMaximumBinaryTree(leftNums)
  root.right = constructMaximumBinaryTree(rightNums)
  return root
}