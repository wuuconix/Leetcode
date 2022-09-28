import { Node } from "./type"

function levelOrder(root: Node | null): number[][] {
  if (!root) {
    return []
  }
  const ans: number[][] = []
  const que: Node[] = [root]
  while (que.length != 0) {
    const size = que.length
    const temp: number[] = []
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.children.forEach(n => {
        que.push(n)
      })
      temp.push(node.val)
    }
    ans.push(temp)
  }
  return ans
}