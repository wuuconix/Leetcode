/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 * 剑指 Offer 36. 二叉搜索树与双向链表
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。
 * @param {Node} root
 * @return {Node}
 * 这道题让我们在原地来改变各个节点的指向，从而实现一个双向链表。
 * 思路比较简单，实际上就是去中序遍历。因为是二叉搜索树，左树小，右树大，中序遍历的顺序就是排序好了。
 * 常规情况下，我们可以在遍历的过程中，把这些节点都保存在一个数组中，然后一次遍历，建立next和prev的指针指向。
 * 但是这道题要求我们原地解决，不能占用额外的空间，所以这道题的难点就在这，在中序遍历中改变指向。
 * 60 ms 92.53%
 * 43.6 MB 5.06%
*/
var treeToDoublyList = function(root) {
    if (!root)
        return null
    let flag = 0 //标志达到最左的叶子。即双向链表的第一个节点
    let pre = null //存储前一个链表中的前一个节点
    let head = null
    let last = null
    let recur = root => {
        if (!root)
            return
        if (!flag && !root.left && !root.right) { //链表第一个节点
            flag = 1
            head = pre = last = root
            return
        }
        recur(root.left)
        if (pre) {
            pre.right = root
            root.left = pre
            pre = root
            last = root //不断记录最后一个节点
        } else { //说明可能没有左子树
            flag = 1
            head = pre = last = root
        }
        recur(root.right)
    }
    recur(root)
    last.right = head
    head.left = last
    return head
};

let root = new Node(4)
root.left = new Node(2)
console.log(treeToDoublyList(root));