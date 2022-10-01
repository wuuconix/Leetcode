import { TreeNode } from "./type"

function isSymmetric_recur(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  return compare(root.left, root.right)
}

function compare(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if ((!node1 && node2) || (node1 && !node2) || (node1 && node2 && node1.val != node2.val)) {
    return false
  } else if (!node1 && !node2) {
    return true
  } else {
    const outside = compare(node1!.left, node2!.right)
    const inside = compare(node1!.right, node2!.left)
    return outside && inside
  }
}

function isSymmetric_queue(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const que: (TreeNode | null)[] = [root.left, root.right]
  while (que.length != 0) {
    const size = que.length
    for (let i = 0; i < size; i += 2) {
      const node1 = que.shift()
      const node2 = que.shift()
      if ((!node1 && node2) || (node1 && !node2) || (node1 && node2 && node1.val != node2.val)) {
        return false
      }
      node1 && que.push(node1.left)
      node2 && que.push(node2.right)
      node1 && que.push(node1.right)
      node2 && que.push(node2.left)
    }
  }
  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const stack: (TreeNode | null)[] = [root.left, root.right]
  while (stack.length != 0) {
    const node1 = stack.pop()
    const node2 = stack.pop()
    if ((node1 && !node2) || (!node1 && node2) || (node1 && node2 && node1.val != node2.val)) {
      return false
    }
    node1 && stack.push(node1.left)
    node2 && stack.push(node2.right)
    node1 && stack.push(node1.right)
    node2 && stack.push(node2.left)
  }
  return true
}