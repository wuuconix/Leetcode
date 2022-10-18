import { TreeNode } from "./type"

function deleteNode_recur(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null
  }
  if (root.val == key) {
    if (!root.left && !root.right) {
      return null
    }
    if (!root.left && root.right) {
      return root.right
    }
    if (root.left && !root.right) {
      return root.left
    }
    if (root.left && root.right) {
      let cur = root.right
      while (cur.left) {
        cur = cur.left
      }
      cur.left = root.left
      return root.right
    }
  }
  if (root.val < key) {
    root.right = deleteNode_recur(root.right, key)
  } else {
    root.left = deleteNode_recur(root.left, key)
  }
  return root
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  function deleteTargetNode(node: TreeNode | null, key: number): TreeNode | null {
    if (!node) {
      return null
    }
    if (!node.left && !node.right) {
      return null
    }
    if (!node.left && node.right) {
      return node.right
    }
    if (node.left && !node.right) {
      return node.left
    }
    if (node.left && node.right) {
      let cur = node.right
      while (cur.left) {
        cur = cur.left
      }
      cur.left = node.left
      return node.right
    }
    return null
  }

  if (!root) {
    return null
  }
  let pre: TreeNode | null = null
  let cur: TreeNode | null = root
  while (cur) {
    if (cur.val == key) {
      break
    }
    pre = cur
    if (cur.val > key) {
      cur = cur.left
    } else if (cur.val < key) {
      cur = cur.right
    }
  }
  if (!pre) {
    return deleteTargetNode(cur, key)
  }
  if (!cur) { //means no such node has val of key, no need to delete
    return root
  }
  if (pre.val < cur.val) {
    pre.right = deleteTargetNode(cur, key)
  } else {
    pre.left = deleteTargetNode(cur, key)
  }
  return root
}