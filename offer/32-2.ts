/* *
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
/* 剑指 Offer 32 - II. 从上到下打印二叉树 II

难度简单

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
  [9,20],
  [15,7]
]
 

提示：

节点总数 <= 1000

----
利用递归，传递layer层数参数。
让每次递归中去丰富result变量。
*/
function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = []
    const recur = (root: TreeNode | null, layer: number): void => {
        if (!root)
            return
        if (!result[layer])
            result[layer] = []
        result[layer].push(root.val)
        layer += 1
        recur(root.left, layer)
        recur(root.right, layer)
    }
    recur(root, 0)
    return result
};