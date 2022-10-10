import { TreeNode } from "./type"

function mergeTrees_recur(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (root1 == null) {
    return root2
  }
  if (root2 == null) {
    return root1
  }
  const root = new TreeNode(root1.val + root2.val)
  root.left = mergeTrees_recur(root1.left, root2.left)
  root.right = mergeTrees_recur(root1.right, root2.right)
  return root
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) {
    return root2
  }
  if (!root2) {
    return root1
  }
  const que1: TreeNode[] = [root1]
  const que2: TreeNode[] = [root2]
  while (que1.length) {
    const size = que1.length
    for (let i = 0; i < size; i++) {
      const node1 = que1.shift()!
      const node2 = que2.shift()!
      node1.val = node1.val + node2.val
      if (!node1.left) {
        node1.left = node2.left
      } else if (node1.left && node2.left) {
        que1.push(node1.left)
        que2.push(node2.left)
      }
      if (!node1.right) {
        node1.right = node2.right
      } else if (node1.right && node2.right) {
        que1.push(node1.right)
        que2.push(node2.right)
      }
    }
  }
  return root1
}