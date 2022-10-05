import { TreeNode } from "./type"

function binaryTreePaths_recur(root: TreeNode | null): string[] {
  const path: number[] = []
  const ans: string[] = []
  if (!root) {
    return []
  }
  traversal(root, path, ans)
  return ans
}

function traversal(node: TreeNode, path: number[], ans: string[]) {
  path.push(node.val)
  if (!node.left && !node.right) { //leaf node
    ans.push(path.join("->"))
    return
  }
  if (node.left) {
    traversal(node.left, path, ans)
    path.pop()
  }
  if (node.right) {
    traversal(node.right, path, ans)
    path.pop()
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return []
  }
  const stack: TreeNode[] = [root]
  const paths: number[][] = [[root.val]]
  const ans: string[] = []
  while (stack.length) {
    const node = stack.pop()!
    const path = paths.pop()!
    if (!node.left && !node.right) {
      ans.push(path.join("->"))
      continue
    }
    if (node.right) {
      paths.push([...path, node.right.val])
      stack.push(node.right)
    }
    if (node.left) {
      paths.push([...path, node.left.val])
      stack.push(node.left)
    }
  }
  return ans
}