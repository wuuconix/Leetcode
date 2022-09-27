/**
 * 剑指 Offer II 046. 二叉树的右侧视图
 * 中等
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例 1:

https://assets.leetcode.com/uploads/2021/02/14/tree.jpg

输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
示例 2:

输入: [1,null,3]
输出: [1,3]
示例 3:

输入: []
输出: []

提示:

二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100
 * @param {TreeNode} root
 * @return {number[]}
 * 这道题的目的是获得每次层上的节点值。
 * 很显然，这道题同样是层次遍历。
 * BFS王道解法
 * 64 ms 
 * 42.6 MB
 */
var rightSideView = function(root) {
    if (!root)
        return []
    let stack = [root]
    let ans = [] //记录每一层的最后一个节点
    while (stack.length) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let temp = stack.shift()
            if (i == length - 1)
                ans.push(temp.val)
            if (temp.left)
                stack.push(temp.left)
            if (temp.right)
                stack.push(temp.right)
        }
    }
    return ans
};

/* DFS解。
因为题目需要得到每一层的最右侧节点。
我们使用根 右 左 的遍历顺序遍历。这样每次到达一个新的层级时，一定是最右侧节点的功劳。
56 ms 94.14%
42.6 MB 60.59% */
var rightSideView = function(root) {
    let maxLevel = -1
    let ans = []
    let dfs = (root, level) => {
        if (root) {
            if (level > maxLevel) { //达到新的一层 需要记录节点值
                maxLevel = level
                ans[level] = root.val
            }
            dfs(root.right, level + 1)
            dfs(root.left, level + 1)
        }
    }
    dfs(root, 0)
    return ans
};