import { TreeNode } from "./type"

function getMinimumDifference_arr(root: TreeNode | null): number {
  const arr: number[] = []
  function traversal(root: TreeNode | null) {
    if (!root) {
      return
    }
    traversal(root.left)
    arr.push(root.val)
    traversal(root.right)
  }
  traversal(root)
  let ans = Infinity
  for (let i = 1; i < arr.length; i++) {
    ans = Math.min(ans, arr[i] - arr[i - 1])
  }
  return ans
}

function getMinimumDifference_inorder(root: TreeNode | null): number {
  let pre: TreeNode | null = null
  let ans = Infinity
  function traversal(root: TreeNode | null) {
    if (!root) {
      return
    }
    traversal(root.left)
    pre && (ans = Math.min(ans, root.val - pre.val))
    pre = root
    traversal(root.right)
  }
  traversal(root)
  return ans
}

function getMinimumDifference_stack_union(root: TreeNode | null): number {
  let ans = Infinity
  const stack: (TreeNode | null)[] = [root]
  let pre: TreeNode | null = null
  while (stack.length) {
    let node = stack.pop()
    if (node) {
      node.right && stack.push(node.right)
      stack.push(node)
      stack.push(null)
      node.left && stack.push(node.left)
    } else {
      node = stack.pop()!
      pre && (ans = Math.min(ans, node.val - pre.val))
      pre = node
    }
  }
  return ans
}

function getMinimumDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = []
  let cur: TreeNode | null = root
  let pre: TreeNode | null = null
  let ans = Infinity
  while (cur || stack.length) {
    if (cur) { //traversal
      stack.push(cur)
      cur = cur.left
    } else { //manipulate
      cur = stack.pop()!
      pre && (ans = Math.min(ans, cur.val - pre.val))
      pre = cur
      cur = cur.right
    }
  }
  return ans
}