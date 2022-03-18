/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 示例 1：
    输入：head = [1,3,2]
    输出：[2,3,1]
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * 68 ms 84.44%
 * 42.8 MB 42.89%
 * 直接从头到尾打印，然后逆序。
 */
var reversePrint = function(head) {
    let result = []
    let node = head
    while (node) {
        result.push(node.val)
        node = node.next
    }
    return result.reverse()
};