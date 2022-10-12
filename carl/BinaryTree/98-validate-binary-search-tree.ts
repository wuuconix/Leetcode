import { TreeNode } from "./type"

function isValidBST_inorder(root: TreeNode | null): boolean {
  let max = -Infinity
  function judge(root: TreeNode | null): boolean {
    if (!root) {
      return true
    }
    const left = judge(root.left)
    if (max < root.val) {
      max = root.val
    } else {
      return false
    }
    const right = judge(root.right)
    return left && right
  }
  return judge(root)
}

function isValidBST_array(root: TreeNode | null): boolean {
  let arr: number[] = []
  function traversal(root: TreeNode | null) {
    if (!root) {
      return
    }
    traversal(root.left)
    arr.push(root.val)
    traversal(root.right)
  }
  traversal(root) //traversal inorder so that we get an array of bst
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false
    }
  }
  return true
}

function isValidBST_stack_inorder_basic(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const stack: TreeNode[] = []
  let cur: TreeNode | null = root
  let beforeVal: number = -Infinity
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()!
      if (beforeVal >= cur.val) {
        return false
      } else {
        beforeVal = cur.val
      }
      cur = cur.right
    }
  }
  return true
}

function isValidBST_stack_inorder_union(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  const stack: (TreeNode | null)[] = [root]
  let prevVal = -Infinity
  while (stack.length) {
    let node = stack.pop()
    if (node) { //traversal
      node.right && stack.push(node.right)
      stack.push(node)
      stack.push(null)
      node.left && stack.push(node.left)
    } else { //manipulate
      node = stack.pop()!
      if (prevVal >= node.val) {
        return false
      } else {
        prevVal = node.val
      }
    }
  }
  return true
}