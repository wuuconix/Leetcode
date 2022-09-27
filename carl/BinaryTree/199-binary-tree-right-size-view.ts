import { TreeNode } from "./type"

function rightSideView(root: TreeNode | null): number[] {
  if (root == null) {
    return []
  }
  const ans: number[] = []
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const size = que.length
    for (let i = 0; i < size; i++) {
      /* remember that shift in que ans pop in stack! don't mix them! */
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
      if (i == size - 1) {
        ans.push(node.val)
      }
    }
  }
  return ans
}