/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 剑指 Offer 55 - I. 二叉树的深度
 * 简单
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
    例如：

    给定二叉树 [3,9,20,null,null,15,7]，

        3
    / \
    9  20
        /  \
    15   7
    返回它的最大深度 3 。

    提示：

    节点总数 <= 10000
 * @param {TreeNode} root
 * @return {number}
 * 思路 dfs来不断遍历，传递一个depth参数。树的根节点时1
 * 去dfs(root.left) 时需要带上depth + 1，即dfs(root.left, depth + 1)
 * 当root不是空时，说明这一层确实存在。将当前的depth和全局变量max取最大值。
 * 这样写dfs不用返回什么值，因为结果存在全局变量里，比较方便。
 * 64 ms 86.28%
 * 44.1 MB 13.42%
 */
var maxDepth = function(root) {
    let max = 0 //记录最大深度
    let dfs = (root, depth) => {
        if (!root)
            return
        max = Math.max(depth, max)
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }
    dfs(root, 1)
    return max
};

/* k神的题解。函数直接递归自己。
我们可以发现我和k神的写法差距在于定义第1层在哪。
我的写法是在根节点的那一层为第一层，然后随着往左子树和右子树去深度不断提高，这是一种朴素的思路，因为深度就是这么定义的。
但是仔细一想，我们的目标是求出树一共有几层，我们完全可以把最下面的一层当作第零层。
最后不断递归回来，实际上根节点那一层是最后一层，也存储着几层的信息。
68 ms 71.27%
43.7 MB 44.04% */
var maxDepth = function(root) {
    if (!root)
        return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};