/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 剑指 Offer 27. 二叉树的镜像
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1
示例 1：
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
 * @param {TreeNode} root
 * @return {TreeNode}
 * 不太复杂，递归调用即可。
 * 这里发现es6里的解构语句用来交换貌似不太好使。
 * 60 ms 83.78%
 * 41.3 MB 39.77%
*/
var mirrorTree = function(root) {
    if (!root)
        return null
    if (root.left)
        mirrorTree(root.left)
    if (root.right)
        mirrorTree(root.right)
    // [root.left, root.right] = [root.right, root.left]
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
}

let root = new TreeNode(2)
root.left = new TreeNode(3)
root.left.left = new TreeNode(1)
mirrorTree(root)