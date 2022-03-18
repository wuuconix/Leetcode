/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 剑指 Offer 18. 删除链表的节点
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

    返回删除后的链表的头节点。

    注意：此题对比原题有改动

    示例 1:

    输入: head = [4,5,1,9], val = 5
    输出: [4,1,9]
    解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 没啥技术难度，找到后删除即可
 * 由于有一个前驱指针pre和一个当前指针cur，可以视为使用了双指针技术233
 * 64 ms 91.43%
 * 43 MB 50.64%
 */
var deleteNode = function(head, val) {
    if (head.val == val) //如果头节点就是目标删除节点
        return head.next
    let pre = head, cur = head.next
    while (cur != null && cur.val != val) {
        i = j
        j = j.next
    }
    if (cur.val == val)
        pre.next = cur.next
    return head
};