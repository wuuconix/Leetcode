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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 参考题解后写出的代码
 * A是一棵树，B是一个树。
 * 我们的思路就是让A去遍历，然后分别和B比较，看B是不是A的某个节点的子结构。
 * 这道题里的子结构和子树的概念不太一样。
 * 子结构的允许比子树少一些枝条。只要保证拥有的节点全部和原树的节点能够对应上就行。
 * 代码中的recur就是用来判断b是否是a的子结构的。
 * 而isSubStructure则有前序遍历A的过程，在遍历中不断判断B是否是A的某个节点的子结构。
 * 104 ms 79.29%
 * 64.1 MB 8.23%
 */
var isSubStructure = function(A, B) {
    let recur = (a, b) => { //查看b是否是a的子树
        if (!b)
            return true
        else if (!a)
            return false
        else if (a.val != b.val)
            return false
        return recur(a.left, b.left) && recur(a.right, b.right)
    }
    if (!A || !B) //A为空， B不可能是它的子树。B为空由题意，它不是任何树的子树
        return false
    else {
        if (recur(A, B)) //俩根节点有子树关系，直接返回true
            return true
        else //根不相同，则试试
            return isSubStructure(A.left, B) || isSubStructure(A.right, B)
    }
};