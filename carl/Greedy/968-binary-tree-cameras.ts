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


function minCameraCover(root: TreeNode | null): number {
  type statusCode = 0 | 1 | 2
  //0 stands for this node haven't benn coverd
  //1 stands for this node place a camera
  //2 stands for this node have benn coverd
  let ans = 0
  function recur(root: TreeNode | null): number {
    if (!root) {
      return 2
    }
    const left = recur(root.left)
    const right = recur(root.right)
    if (left == 2 && right == 2) {
      return 0 //leaf node, not coverd
    }
    if (left == 0 || right == 0) {
      ans++
      return 1
    }
    if (left == 1 || right == 1) {
      return 2
    }
    return 0 //plaeholder
  }
  if (recur(root) == 0) {
    ans++
  }
  return ans
}