import { TreeNode } from "./type"

function sortedArrayToBST_recur(nums: number[]): TreeNode | null {
  if (nums.length == 0) {
    return null
  }
  const pivot = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[pivot])
  const leftNums = nums.slice(0, pivot)
  const rightNums = nums.slice(pivot + 1)
  root.left = sortedArrayToBST_recur(leftNums)
  root.right = sortedArrayToBST_recur(rightNums)
  return root
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length == 0) {
    return null
  }
  const root = new TreeNode(0)
  const nodeQue = [root]
  const leftQue = [0]
  const rightQue = [nums.length - 1]
  while (nodeQue.length) {
    const node = nodeQue.shift()!
    const left = leftQue.shift()!
    const right = rightQue.shift()!
    const mid = Math.floor((left + right) / 2)
    node.val = nums[mid]
    if (left <= mid - 1) {
      const leftNode = new TreeNode(0)
      node.left = leftNode
      nodeQue.push(leftNode)
      leftQue.push(left)
      rightQue.push(mid - 1)
    }
    if (right > mid) {
      const rightNode = new TreeNode(0)
      node.right = rightNode
      nodeQue.push(rightNode)
      leftQue.push(mid + 1)
      rightQue.push(right)
    }
  }
  return root
}