/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 剑指 Offer II 044. 二叉树每层的最大值
 * 中等
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

示例1：

输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
解释:
          1
         / \
        3   2
       / \   \  
      5   3   9 
示例2：

输入: root = [1,2,3]
输出: [1,3]
解释:
          1
         / \
        2   3
示例3：

输入: root = [1]
输出: [1]
示例4：

输入: root = [1,null,2]
输出: [1,2]
解释:      
           1 
            \
             2     
示例5：

输入: root = []
输出: []
 
提示：

二叉树的节点个数的范围是 [0,10^4]
-2^31 <= Node.val <= 2^31 - 1
 * @param {TreeNode} root
 * @return {number[]}
 * 简单层次遍历，在层次遍历中更新max数组。
 * 我层次遍历一直最先想到的就是参数里加上level信息。
 * 但是实际上看题解，层次遍历更加常见的做法是利用栈，把孩子节点入栈。出栈的时候再存入它们的孩子节点。
 * 再仔细思考了一番，发现我这个做法实际上是DFS，深度优先搜索，因为它会不断朝着左下角前进。
 * 只不过因为加上了level层级信息最终实现了目的，严格意义上不算层次遍历。
 * 84 ms 33.78%
 * 45.1 MB 79.27%
 */
var largestValues = function(root) {
    let max = []
    let levelTraversal = (root, level) => {
        if (root) {
            if (max[level] == undefined || root.val > max[level]) {
                max[level] = root.val
            }
            levelTraversal(root.left, level + 1)
            levelTraversal(root.right, level + 1)
        }
    }
    levelTraversal(root, 0)
    return max
};

/* 用了一把真正的正统做法，即广度优先搜索。
然后利用队列的特点，实现了层次遍历。 
80 ms 50.17%
45.7 MB 38.80% */

var largestValues = function(root) {
    if (!root)
        return []
    let stack = []
    stack.push(root)
    let ans = []
    while (stack.length > 0) {
        let length = stack.length //记录当前栈里的节点个数
        let max
        for (let i = 0; i < length; i++) {
            let node = stack.shift()
            if (max == undefined || node.val > max)
                max = node.val
            if (node.left)
                stack.push(node.left)
            if (node.right)
                stack.push(node.right)
        }
        ans.push(max) //得到当前层里面的最大值。
    }
    return ans
};