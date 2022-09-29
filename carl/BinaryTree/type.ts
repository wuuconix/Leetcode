class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val===undefined ? 0 : val)
    this.children = []
  }
}

class Node2 {
  val: number
  left: Node2 | null
  right: Node2 | null
  next: Node2 | null
  constructor(val?: number, left?: Node2, right?: Node2, next?: Node2) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = (next===undefined ? null : next)
  }
}

export { TreeNode, Node, Node2 }