import { TreeNode } from "./type"

function countNodes_recur(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  return 1 + countNodes_recur(root.left) + countNodes_recur(root.right)
}

function countNodes_level(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const que: TreeNode[] = [root]
  let ans = 0
  while (que.length != 0) {
    const size = que.length
    for (let i = 0; i < size; i++) {
      ans++
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
  }
  return ans
}

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let depLeft = 0, depRight = 0
  let p: TreeNode | null = root
  while (p) {
    depLeft++
    p = p.left
  }
  p = root
  while (p) {
    depRight++
    p = p.right
  }
  //if is full complete tree, just use 2^depth - 1, no need to recur
  if (depLeft == depRight) {
    return 2 ** (depLeft) - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
}