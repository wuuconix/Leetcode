import { TreeNode } from "./type"

function convertBST_recur(root: TreeNode | null): TreeNode | null {
  let pre = 0
  function traversal(node: TreeNode | null) {
    if (!node) {
      return
    }
    traversal(node.right)
    node.val += pre
    pre = node.val
    traversal(node.left)
  }
  traversal(root)
  return root
}

function convertBST_stack_union(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const stack: (TreeNode | null)[] = [root]
  let pre = 0
  while (stack.length) {
    let node = stack.pop()
    if (node) {
      node.left && stack.push(node.left)
      stack.push(node)
      stack.push(null)
      node.right && stack.push(node.right)
    } else {
      node = stack.pop()!
      node.val += pre
      pre = node.val
    }
  }
  return root
}

function convertBST_stack_cur(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  let cur: TreeNode | null = root
  let pre = 0
  const stack: TreeNode[] = []
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.right
    } else {
      cur = stack.pop()!
      cur.val += pre
      pre = cur.val
      cur = cur.left
    }
  }
  return root
}