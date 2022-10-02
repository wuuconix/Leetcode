import { Node3 as Node } from "./type"

function maxDepth_reucr(root: Node | null): number {
  if (!root) {
    return 0
  }
  let max = 0
  root.children.forEach(node => {
    max = Math.max(max, maxDepth(node))
  })
  return 1 + max
}

function maxDepth(root: Node | null): number {
  if (!root) {
    return 0
  }
  const que: Node[] = [root]
  let depth = 0
  while (que.length != 0) {
    depth++
    const size = que.length
    for (let i = 0; i < size; i++) {
      const node = que.shift()!
      node.children.forEach(node => {
        que.push(node)
      })
    }
  }
  return depth
}