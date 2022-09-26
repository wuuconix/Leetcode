import { TreeNode } from "./type"

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root == null) {
    return []
  }
  const ans: number[][] = []
  const que: TreeNode[] = [root]
  while (que.length != 0) {
    const size = que.length
    const temp: number[] = []
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      temp.push(node.val)
      node.left && que.push(node.left)
      node.right && que.push(node.right)
    }
    ans.push(temp)
  }
  return ans.reverse()
}