/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 * 简单
 * 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

    示例 1:
    输入: root = [3,1,4,null,2], k = 1
    3
    / \
    1   4
    \
       2
    输出: 4

    示例 2:
    输入: root = [5,3,6,2,4,null,null,1], k = 3
        5
        / \
        3   6
        / \
    2   4
    /
    1
    输出: 4
     
    限制：
    1 ≤ k ≤ 二叉搜索树元素个数
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 这道题我的思路是写一个函数用来获取该节点在树里的次序。
 * 这里的次序是指第几大。
 * 比如最右侧的一个节点一定是第1大的，所以它的次数就是1。
 * 那么它的根节点就应该是 2， 即一个节点的次数需要被返回，然后供上次来计算它自己的次数。
 * 84 ms 32.79%
 * 47.6 MB 15.90%
 */
var kthLargest = function(root, k) {
    let val //记录第k大节点的值

    let getIndex = (root, init) => {
        let index //记录返回值，即root这颗子树的最大index。
        if (!root) //节点是空接待你
            return init - 1
        if (!root.right && init == 0) { //没有右子树，且init为0，说明它就是最大的那个
            if (k == 1)
                val = root.val
            index = getIndex(root.left, 2) //左子树将在根节点的index上+1
            return index
        }   
        index = getIndex(root.right, init) + 1 //根节点的index将在右子树的基础上加1
        if (index == k) //找到目标节点
            val = root.val
        index = getIndex(root.left, index + 1) 
        return index
    }
    getIndex(root, 0)
    return val
};

/* 看过k神的题解后发现我朴素的题解里蕴含着 中序遍历的逆序，即右、根、左的遍历方式。
同时通过一个巧妙的方式避免了在找到第k大个元素后继续遍历。
节省了一定时间。
72 ms 78.24%
47.1 MB 53.02%
*/
var kthLargest = function(root, k) {
    let res
    const dfs = root => { //中序遍历的逆序，即右、根、左的遍历方式。
        if (!root || k == 0)
            return
        dfs(root.right)
        k-- //k不断减小，当k等于0的时候就找到了目标节点
        if (k == 0)
            res = root.val
        dfs(root.left)
    }
    dfs(root)
    return res
}