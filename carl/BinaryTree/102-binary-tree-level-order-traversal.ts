import { TreeNode } from "./type"

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return []
  }
  const ans: number[][] = []
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const length = que.length
    const temp: number[] = []
    for (let i = 0; i < length; i++) {
      const node = que.shift()!
      temp.push(node.val)
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
    ans.push(temp)
  }
  return ans
}