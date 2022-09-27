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

/**剑指 Offer 52. 两个链表的第一个公共节点
 * 简单
 * 
 * 示例 1：

 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

---
 * 完全没有思路的一道题目。 https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/yi-zhang-tu-jiu-ming-bai-ai-qing-jie-shi-up3a/
 * 看了题解，发现把两条链表拼起来后就能让长度相同。
 * 这个时候去比较是否相同即可。
 * 如果没有公共节点，他们相等的时候就会在最后的null。返回null即可。
 * 72 ms 98.71%
 * 48 MB 52.57%
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB
    while (pA != pB) {
        pA = pA == null ? headB : pA.next
        pB = pB == null ? headA : pB.next
    }
    return pA
};

let headA = new ListNode(0)
let headB = new ListNode(1)
let common = new ListNode(2)
headA.next = common
headB.next = common
console.log(getIntersectionNode(headA, headB));