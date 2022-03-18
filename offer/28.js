/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
*/
let isSame = (a, b) => { //判断两棵树是否相同
    if ((!a && b) || (a && !b)) //一个空一个不空
        return false
    if (!a && !b) //两者都是空树
        return true
    if (a.val != b.val) //值不一样
        return false
    if (a.val == b.val)
        return isSame(a.left, b.left) && isSame(a.right, b.right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
*/
let mirror = (root) => { //返回镜像后的结果
    if (!root)
        return null
    let mirrorRoot = new TreeNode(root.val)
    mirrorRoot.left = mirror(root.right)
    mirrorRoot.right = mirror(root.left)
    return mirrorRoot
}

/**
 * 剑指 Offer 28. 对称的二叉树
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 

示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
 * @param {TreeNode} root
 * @return {boolean}
 * 这道题和剑指offer27题类似，都和镜像有关。
 * 既然一个树是否是对称的定义是 它本身是否和镜像相同。
 * 那么我们只要先把一颗树对称后的结果保存下来。
 * 然后和本省相比较，如果相同，则true。
 * 所以我写了mirror函数来得到镜像后的结果，isSame函数来判断两颗树是否相同。
 * 这里要注意mirror函数在上一题中，我写的代码会直接改变原树，相当于指针。
 * 这里为了不影响原树，需要手动new TreeNode。
 * 72 ms 63.22%
 * 43.7 MB 19.18%
 */
var isSymmetric = function(root) {
    let mirrorRoot = mirror(root)
    if (isSame(mirrorRoot, root))
        return true
    else
        return false
};

/* 查看题解后发现可以不同镜像，直接递归比较
时间确实减小了许多。代码也更加简洁了。
60 ms 96.50%
43.7 MB 20.82% */
var isSymmetric = function(root) {
    let recur = (l, r) => {
        if (!l && !r)
            return true
        else if (!l || !r || l.val != r.val)
            return false
        return recur(l.left, r.right) && recur(l.right, r.left)
    }
    return !root ? true : recur(root.left, root.right)
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.left.right = new TreeNode(3)
root.right.right = new TreeNode(3)
isSymmetric(root)