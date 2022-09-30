import { Node, TreeNode } from "./type"

function invertTree_recur(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  [root.left, root.right] = [root.right, root.left]
  invertTree_recur(root.left)
  invertTree_recur(root.right)
  return root
}

function invertTree_pre(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const stack: TreeNode[] = [root]
  while (stack.length != 0) {
    const node = stack.pop()!;
    [node.left, node.right] = [node.right, node.left]
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return root
}

function invertTree_unified_pre(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const stack: (TreeNode | null)[] = [root]
  while (stack.length != 0) {
    let node = stack.pop()
    if (node) {
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
      stack.push(node)
      stack.push(null)
    } else {
      node = stack.pop()!;
      [node.left, node.right] = [node.right, node.left]
    }
  }
  return root
}

function invertTree_level(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const size = que.length
    for (let i = 0; i < size; i++) {
      const node = que.shift()!;
      [node.left, node.right] = [node.right, node.left]
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
  }
  return root
}