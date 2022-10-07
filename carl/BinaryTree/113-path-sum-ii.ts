import { TreeNode } from "./type"

function pathSum_recur(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return []
  }
  let ans: number[][] = []
  let path: number[] = []
  function traversal(node: TreeNode, targetSum: number) {
    path.push(node.val)
    if (!node.left && !node.right && targetSum == node.val) {
      ans.push([...path]) //must copy here, or the path we push to ans is just a inference which will change in the recur future
    }
    if (node.left) {
      traversal(node.left, targetSum - node.val)
    }
    if (node.right) {
      traversal(node.right, targetSum - node.val)
    }
    path.pop()
  }
  traversal(root, targetSum)
  return ans
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) {
    return []
  }
  const stack: TreeNode[] = [root]
  const ans: number[][] = []
  const paths: number[][] = [[root.val]]
  while (stack.length) {
    const node = stack.pop()!
    const path = paths.pop()!
    if (!node.left && !node.right && sum(path) == targetSum) {
      ans.push([...path])
    }
    if (node.right) {
      stack.push(node.right)
      paths.push([...path, node.right.val])
    }
    if (node.left) {
      stack.push(node.left)
      paths.push([...path, node.left.val])
    }
  }
  return ans
}

function sum(path: number[]): number {
  let sum = 0
  path.forEach(val => sum += val)
  return sum
}