/**
 * 剑指 Offer 07. 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
   假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 该题的意思是让你根据前序遍历和中序遍历构造一个二叉树。
 * 最后函数返回一个二叉树的头节点就行。
 * 思路是前序遍历的第一个值一定是根节点，然后在后续遍历里找它，后续遍历根节点左半部分就是左子树，右半部分就是右子树。
 * 然后递归实现。
 * 做题的过程中发现如果不写let，貌似会产生作用域混乱的问题，貌似不写let，该变量在递归过程中会作为一个全局变量。
 * 下次定义变量的时候一定要写了let
 * 156 ms 36.94%
 * 17.1 MB 11.59%
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) { //零个节点
        return null
    } else if (preorder.length == 1) { //只有一个节点了，他就是根节点
        return new TreeNode(preorder[0])
    } else { //大于等于三个节点的情况下
        let root = new TreeNode(preorder[0]) //根节点
        let rootIndex = inorder.indexOf(root.val) //该值等于左子树的节点个数
        let leftTree = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
        let rightTree = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
        root.left = leftTree
        root.right = rightTree
        return root
    }
};

let preorder = [1, 2, 3], inorder = [3, 2, 1]
const root = buildTree(preorder, inorder)
console.log(root.val)