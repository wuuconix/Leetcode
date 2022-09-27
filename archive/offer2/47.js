/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 剑指 Offer II 047. 二叉树剪枝
 * 中等
 * 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

节点 node 的子树为 node 本身，以及所有 node 的后代。

示例 1:

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png

输入: [1,null,0,0,1]
输出: [1,null,0,null,1] 
解释: 
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。

示例 2:

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png

输入: [1,0,1,0,0,0,1]
输出: [1,null,1,null,1]
解释: 

示例 3:

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png

输入: [1,1,0,1,1,0,1,0]
输出: [1,1,0,1,1,null,1]
解释: 

提示:

二叉树的节点个数的范围是 [1,200]
二叉树节点的值只会是 0 或 1
 * @param {TreeNode} root
 * @return {TreeNode}
 * 解决思路是利用层次遍历，获取某个节点下子树们的 0 和 1 的数量。
 * 如果 1 的个数是0 并且 0 的个数非零，则这个子树需要被清楚。
 * 52 ms 96.42%
 * 43 MB 5.02%
 */
var pruneTree = function(root) {
    if (!root)
        return null
    let result = getNumber(root)
    console.log(result)
    if (result[0] > 0 && result[1] == 0) { //整棵树全部都是由0构成的。
        return null
    }
    result = getNumber(root.left)
    console.log(result)
    if (result[0] > 0 && result[1] == 0) {
        root.left = null
    } else {
        pruneTree(root.left)
    }
    result = getNumber(root.right)
    console.log(result)
    if (result[0] > 0 && result[1] == 0) {
        root.right = null
    } else {
        pruneTree(root.right)
    }
    return root
};

let getNumber = (root) => { //用来记录某个节点下面零和一的个数
    if (!root)
        return [0, 0]
    let ans = [0, 0]
    let stack = [root]
    while (stack.length) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let temp = stack.shift()
            ans[temp.val]++
            if (temp.left)
                stack.push(temp.left)
            if (temp.right)
                stack.push(temp.right)
        }
    }
    return ans
}

/* 看了题解，发现这道题不用 层次遍历，用后序遍历即可。
先去处理左右子树，让它们应消尽消。
处理完后，如果根节点的val是零，并且它的左右子树都是空了，说明它本身也需要被删除。
56 ms 90.68%
41.2 MB 63.08% */
var pruneTree = function(root) {
    if (!root)
        return null
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    if (root.val == 0 && !root.left && !root.right)
        return null
    return root
};