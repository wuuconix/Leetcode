/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 剑指 Offer II 049. 从根节点到叶节点的路径数字之和
 * 中等
 * 给定一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。

示例 1：


输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
示例 2：


输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026
 
提示：

树中节点的数目在范围 [1, 1000] 内
0 <= Node.val <= 9
树的深度不超过 10
 * @param {TreeNode} root
 * @return {number}
 * 简单dfs即可，在dfs先序遍历的过程中记录str
 * 当判断某个节点是叶子节点的时候，即左节点和右节点都是null的时候，
 * 我们就把str加到ans里面
 * 60ms 76.03%
 * 41.3mb 49.52%
 */
var sumNumbers = function(root) {
    let ans = 0
    let dfs = (root, str) => {
        str = str + String(root.val)
        if (!root.left && !root.right) {
            ans += Number(str)
        } else {
            if (root.left) {
                dfs(root.left, str)
            }
            if (root.right) {
                dfs(root.right, str)
            }
        }
    }
    dfs(root, "")
    return ans
};