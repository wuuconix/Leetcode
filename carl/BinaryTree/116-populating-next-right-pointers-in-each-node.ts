import { Node2 as Node } from "./type"


function connect(root: Node | null): Node | null {
  if (!root) {
    return null
  }
  const que: Node[] = [root]
  while (que.length != 0) {
    const size = que.length
    const temp: Node[] = []
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.left && que.push(node.left)
      node.right && que.push(node.right)
      if (i == 0) {
        temp.push(node)
      } else {
        temp.pop()!.next = node
        temp.push(node)
      }
    }
  }
  return root
}