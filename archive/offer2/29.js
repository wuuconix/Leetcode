/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * 剑指 Offer II 029. 排序的循环链表
 * 中等
 * 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。
 
示例 1：

https://assets.leetcode.com/uploads/2019/01/19/example_1_before_65p.jpg

输入：head = [3,4,1], insertVal = 2
输出：[3,4,1,2]
解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。

示例 2：

https://assets.leetcode.com/uploads/2019/01/19/example_1_after_65p.jpg

输入：head = [], insertVal = 1
输出：[1]
解释：列表为空（给定的节点是 null），创建一个循环有序列表并返回这个节点。
示例 3：

输入：head = [1], insertVal = 0
输出：[1,0]

提示：

0 <= Number of Nodes <= 5 * 10^4
-10^6 <= Node.val <= 10^6
-10^6 <= insertVal <= 10^6
 
注意：本题与主站 708 题相同： https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list/
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 * 这道题的链表是循环的，而且保证了是非递减的。可以这么说，这个链表的顺序就是从小到的。整个链表上只有一个点是从大到小的。
 * 就是最大值和最小值之间。
 * 如果insertVal 大于最大值或者小于最小值，那么我们直接把它插入在最大值和最小值中间即可。
 * 如果不是，则它应该需要在链表中间。
 * 72 ms 37.22%
 * 42.6 MB 78.48%
 */
var insert = function(head, insertVal) {
    if (!head) {
        let newHead = new Node(insertVal)
        newHead.next = newHead
        return newHead
    }
    let minNode = head
    let p = head
    do {
        if (p.val < minNode.val) {
            minNode = p
        }
        p = p.next
    } while (p != head)
    p = minNode
    while (p) {
        if (p.next == minNode && (insertVal >= p.val || insertVal <= p.next.val)) { //insertVal 比最大的大或者比最小的小
            p.next = new Node(insertVal)
            p.next.next = minNode
            return head
        }
        if (p.val <= insertVal && p.next.val >= insertVal) {
            let temp = p.next
            p.next = new Node(insertVal)
            p.next.next = temp
            return head
        }
        p = p.next
    }
};