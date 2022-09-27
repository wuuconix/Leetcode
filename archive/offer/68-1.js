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
 * 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
 * 简单
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 写一个函数用来判断target是否是root的子节点。
 * 然后再写一个遍历的函数从根开始遍历，同时满足 p是root子节点，q是root子节点，则满足公共祖先的定义。
 * 是的情况下，递归root的left和right，看看root.left或者root.right是否是p和q的公共祖先。是的话就更新最近公共祖先。
 * 68 ms 96.79%
 * 51.1 MB 9.80%
 */
var lowestCommonAncestor = function(root, p, q) {
    let isChild = (root, target) => {
        if (!root) //root为null了，它不可能是target的祖先
            return null
        if (root.left == target || root.right == target)
            return true
        return isChild(root.left, target) || isChild(root.right, target)
    }
    if (isChild(p, q))
        return p
    else if (isChild(q, p))
        return q
    let last = root //记录p 和 q的最近的共同祖先
    let recur = (root) => {
        if (isChild(root, p) && isChild(root, q)) {
            last = root
            recur(root.left)
            recur(root.right)
        }
    }
    recur(root)
    return last
};

/* 做完做到下一题 68-2.js 才发现这一题的树是二叉搜索树，可以根据这个条件优化一下 
可以直接通过节点的值来判断。
92 ms 28.60%
50.7 MB 53.38%*/
var lowestCommonAncestor = function(root, p, q) {
    let x = p.val < q.val ? p : q // x记录p和q里val的小者
    let y = p.val < q.val ? q : p //y记录val大者
    let recur = (root) => {
        if (root == x || root == y)
            return root
        if (root.val > x.val && root.val < y.val) //说明在root两边了，那么root一定是两者的最近公共祖先
            return root
        if (root.val > x.val && root.val > y.val) //在root左侧
            return recur(root.left)
        else if (root.val < x.val && root.val < y.val) //在root右侧
            return recur(root.right)
    }
    return recur(root)
};

/* 用迭代写，k神的写法。怎么耗时越来越高了，不太对劲。。
96 ms 18.67%
50.7 MB 56.83% */
var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            break
        }
    }
    return root
};