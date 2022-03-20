/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/* 剑指 Offer 34. 二叉树中和为某一值的路径
中等
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
示例 2：

输入：root = [1,2,3], targetSum = 5
输出：[]

提示：

树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

----
思路不难，类似于树的先序遍历。
因为题目要求的路径一定是要从根要叶子的，而且树的节点的值可能是负的。所以我们就不用在中间判断。
直接判断它是不是叶子，然后如果是叶子，并且这一路来的路径和就是target，那么就是一条可行路径。
然后根据它是否有左儿子和右二子继续递归。
这里要注意js中数组存在浅拷贝的问题。若我们需要一个深拷贝，之后改变它不会对之前的结果产生影响。
那么我们可以利用 array.slice()  或者 array.slcie(0) 实现简单的深拷贝。

88 ms 54.10%
52.6 MB 15.57%
*/
function pathSum(root: TreeNode | null, target: number): number[][] {
    if (!root)
        return []
    let ans: number[][] = []
    const recur = (root: TreeNode, way: number[], total: number): void => {
        way.push(root.val)
        total += root.val
        if (!root.left && !root.right && total == target) //叶子节点，且这条路的权值的target
            ans.push(way.slice(0)) //实现way的深拷贝，之后way改变不会影响ans里面的
        if (!root.left && !root.right && total != target) //叶子节点但不相等
            return
        if (root.left)
            recur(root.left, way.slice(), total)
        if (root.right)
            recur(root.right, way.slice(), total)
    }
    recur(root, [], 0)
    return ans
};

let root: TreeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(pathSum(root, 3));

