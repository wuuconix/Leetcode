import { TreeNode } from "./type"

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const stack: (TreeNode | null)[] = [root]
  while (stack.length != 0) {
    const node = stack.pop()!
    if (isSameTree(node, subRoot)) {
      return true
    }
    node && stack.push(node.right)
    node && stack.push(node.left)
  }
  return false
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stack: (TreeNode | null)[] = [p, q]
  while (stack.length != 0) {
    const node1 = stack.pop()
    const node2 = stack.pop()
    if ((node1 && !node2) || (!node1 && node2) || (node1 && node2 && node1.val != node2.val)) {
      return false
    }
    node1 && stack.push(node1.left)
    node2 && stack.push(node2.left)
    node1 && stack.push(node1.right)
    node2 && stack.push(node2.right)
  }
  return true
}