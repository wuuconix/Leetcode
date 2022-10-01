import { TreeNode } from "./type"

function isSameTree_recur(p: TreeNode | null, q: TreeNode | null): boolean {
  if((!p && q) || (p && !q) || (p && q && p.val != q.val)) {
    return false
  } else if (!p && !q) {
    return true
  } else {
    const outside = isSameTree_recur(p!.left, q!.left)
    const inside = isSameTree_recur(p!.right, q!.right)
    return outside && inside
  }
}

function isSameTree_queue(p: TreeNode | null, q: TreeNode | null): boolean {
  const que: (TreeNode | null)[] = [p, q]
  while (que.length != 0) {
    const size = que.length
    for (let i = 0; i < size; i += 2) {
      const node1 = que.shift()
      const node2 = que.shift()
      if ((node1 && !node2) || (!node1 && node2) || (node1 && node2 && node1.val != node2.val)) {
        return false
      }
      node1 && que.push(node1.left)
      node2 && que.push(node2.left)
      node1 && que.push(node1.right)
      node2 && que.push(node2.right)
    }
  }
  return true
}

function isSameTree_stack(p: TreeNode | null, q: TreeNode | null): boolean {
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

export { isSameTree_stack }
// const p = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// const q = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// console.log(isSameTree(p, q))