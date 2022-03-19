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

/* 剑指 Offer 32 - III. 从上到下打印二叉树 III
中等
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [20,9],
  [15,7]
]

---
和32-2的题目类似，只不过这次每一层的顺序不一样，一层从左到右，下一层从右到左。
最暴力的办法就是和32-2一摸一样，然后一个循环把每一个调整顺序。
我这里使用unshift来实现从右到左。

72 ms 64.39%
44.2 MB 16.66%
*/
function levelOrder(root: TreeNode | null): number[][] {
    let res: number[][] = []
    const recur = (root: TreeNode | null, layer: number): void => {
        if (!root)
            return
        if (!res[layer])
            res[layer] = []
        if (layer % 2 == 0) //偶数层push实现从左往右
            res[layer].push(root.val)
        else //奇数层unshift实现从右往左
            res[layer].unshift(root.val)
        layer++
        recur(root.left, layer)
        recur(root.right, layer)
    }
    recur(root, 0)
    return res
};