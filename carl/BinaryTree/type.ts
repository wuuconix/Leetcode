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
export { TreeNode, Node }