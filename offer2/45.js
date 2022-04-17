/**
 * 剑指 Offer II 045. 二叉树最底层最左边的值
 * 中等
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

示例 1:

输入: root = [2,1,3]
输出: 1
示例 2:

输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
 
提示:

二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1
 * @param {TreeNode} root
 * @return {number}
 * 这道题不是简单的最左边的节点，不然直接dfs就行了。
 * 它是指最底层的最左侧的节点，相当于最后一层里最左侧的节点。
 * 很显然，它属于层次遍历的衍生题目，我们利用层次遍历的王道做法 BFS + 队列 即可。
 * 每到一层记录一下最开始的节点的值。层次遍历一结束，答案也就知道了。
 * 	68 ms 
 * 45.2 MB
 */
var findBottomLeftValue = function(root) {
    let stack = [root]
    let ans = root.val
    while (stack.length > 0) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let temp = stack.shift()
            if (i == 0)
                ans = temp.val
            if (temp.left)
                stack.push(temp.left)
            if (temp.right)
                stack.push(temp.right)
        }
    }
    return ans
};  

/* DFS 解。
因为dfs实际上蕴含着先序遍历。根左右。
那么某一层的最左端的节点是会被最先访问到的。
我们每次遇到一个新的节点，就记录下它的值。
72 ms 63.50%
44.5 MB 78.83% */
var findBottomLeftValue = function(root) {
    let maxLevel = 0
    let ans = root.val
    let dfs = (root, level) => {
        if (root) {
            if (level > maxLevel) { //更新最大层次
                maxLevel = level
                ans = root.val
            }
            dfs(root.left, level + 1)
            dfs(root.right, level + 1)
        }
    }
    dfs(root, 0)
    return ans
};  