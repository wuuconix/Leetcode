/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 剑指 Offer II 050. 向下的路径节点之和
 * 中等
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例 1：

https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg

输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
示例 2：

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
 
提示:

二叉树的节点个数的范围是 [0,1000]
-10^9 <= Node.val <= 10^9 
-1000 <= targetSum <= 1000
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * 这道题比较麻烦，因为普通的路径之和问题，是从根节点到叶子节点的，比较好判断，情况也比较少。
 * 而这道题要求记录所有符合路径之和的个数，不需要从根节点除法或者以叶子节点结束，完全就是树中的一段也也可以。
 * 所以个人感觉这道题需要遍历所有的的节点，然后以每个节点为起点，进行判断。
 * 所以这么想就需要两轮遍历树。第一轮遍历所有节点。第二轮就是以某个节点为起点，继续遍历。
 * 160 ms 6.44%
 * 49.9 MB 9.01%
 * */
var pathSum = function(root, targetSum) {
    let ans = 0
    let dfs = (root) => {
        if (!root)
            return
        ans += hasSum(root, targetSum)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return ans
};

let hasSum = (root, targetSum) => { //判断某个节点到叶子节点的所有路径中是否有target 并记录个数
    let num = 0
    let dfs = (root, sum) => {
        if (!root)
            return
        sum += root.val
        if (sum == targetSum)
            num++
        if (root.left)
            dfs(root.left, sum)
        if (root.right)
            dfs(root.right, sum)
    }
    dfs(root, 0)
    console.log(num)
    return num
}