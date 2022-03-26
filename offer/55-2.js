/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 剑指 Offer 55 - II. 平衡二叉树
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 
示例 1:
给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

限制：
0 <= 树的结点个数 <= 10000

 * @param {TreeNode} root
 * @return {boolean}
 * 这道题就是不断求出左子树和右子树的深度。
 * 然后看看差值是否小于等于1，如果不是，就不是平衡二叉树，应该设置一定条件，让后序不再遍历。
 * 而求深度的差距就是 55-1.js中k神的做法，像我那种用全局变量的方式就不适合了。
 * 该题的思想首先是后序遍历。
 * 然后在后续遍历的过程中，加入了左右树深度的判断，继而能够确定某个小树是否为平衡树。
 * 当发现一个非平衡子树后通过将全局变量res置为false的方式，形成剪枝，提高时间复杂度。
 * 52 ms 99.94%
 * 45.9 MB 41.61%
 */
var isBalanced = function(root) {
    let res = true
    let getDepth = root => {
        if (!root)
            return 0
        if (res) { //目前还是平衡的
            let leftDepth = getDepth(root.left)
            let rightDepth = getDepth(root.right)
            if (Math.abs(leftDepth - rightDepth) <= 1)
                return Math.max(leftDepth, rightDepth) + 1
            else
                res = false //不平衡
        }
    }
    getDepth(root)
    return res
};