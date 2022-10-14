import { TreeNode } from "./type"

function findMode_using_bst_feature(root: TreeNode | null): number[] {
  let pre: TreeNode | null = null
  let count = 0
  const ans: number[] = []
  let maxCount = 0
  function traversal(root: TreeNode | null) {
    if (!root) {
      return
    }
    traversal(root.left)
    if (!pre || (root.val != pre.val)) {
      count = 1
    } else {
      count++
    }
    pre = root
    if (count > maxCount) {
      maxCount = count
      ans.length = 0
      ans.push(root.val)
    } else if (count == maxCount) {
      ans.push(root.val)
    }
    traversal(root.right)
  }
  traversal(root)
  return ans
}

function findMode_using_normal_map(root: TreeNode | null): number[] {
  const map: Map<number, number> = new Map()
  function traversal(root: TreeNode | null) {
    if (!root) {
      return
    }
    traversal(root.left)
    map.set(root.val, (map.get(root.val) ?? 0) + 1)
    traversal(root.right)
  }
  traversal(root)
  const sorted = [...map].sort((a, b) => a[1] - b[1])
  return sorted.filter(val => val[1] == sorted[sorted.length - 1][1]).map(val => val[0])
}

function findMode_stack_union(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = [root]
  let pre: TreeNode | null = null
  const ans: number[] = []
  let maxCount = 0
  let count = 0
  while (stack.length) {
    let node = stack.pop()
    if (node) { //traversal
      node.left && stack.push(node.left)
      stack.push(node)
      stack.push(null)
      node.right && stack.push(node.right)
    } else { //manipulate
      node = stack.pop()!
      if (!pre || pre.val != node.val) {
        count = 1
      } else {
        count++
      }
      if (count > maxCount) {
        maxCount = count
        ans.length = 0
        ans.push(node.val)
      } else if (count == maxCount) {
        ans.push(node.val)
      }
      pre = node
    }
  }
  return ans
}

function findMode_stack_inorder_spec(root: TreeNode | null): number[] {
  const stack: TreeNode[] = []
  let cur: TreeNode | null  = root
  let pre: TreeNode | null = null
  const ans: number[] = []
  let maxCount = 0
  let count = 0
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()!
      if (!pre || pre.val != cur.val) {
        count = 1
      } else {
        count++
      }
      if (count > maxCount) {
        maxCount = count
        ans.length = 0
        ans.push(cur.val)
      } else if (count == maxCount) {
        ans.push(cur.val)
      }
      pre = cur
      cur = cur.right
    }
  }
  return ans
}