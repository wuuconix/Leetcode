/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 剑指 Offer II 021. 删除链表的倒数第 n 个结点
 * 中等
 * 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
    输出：[1,2,3,5]
    示例 2：

    输入：head = [1], n = 1
    输出：[]
    示例 3：

    输入：head = [1,2], n = 1
    输出：[1]

    提示：

    链表中结点的数目为 sz
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 哈希表一把梭，一次遍历，把所有节点全部放 哈希表里。
 * 然后直接修改next。
 * 64 ms 41.8 MB
 */
var removeNthFromEnd = function(head, n) {
    let hashTable = [] //存放每个节点
    let p = head
    while (p) {
        hashTable.push(p)
        p = p.next
    }
    if (hashTable.length == 1)
        return null
    else if (hashTable.length == n) //删除头节点，返回第二个节点
        return hashTable[1]
    else {
        hashTable[hashTable.length - 1 - n].next = hashTable[hashTable.length - n].next
        return  head
    }
};

/* 快慢指针可以实现不用哈希表的额外占用空间。时间仍未O(n)的情况下，空间复杂度降低到O(1)
即快指针先走n步，然后快指针走到 最后一个节点的时候，慢指针就是倒数第n个节点。
实际操作的时候，我们用fast.next来判断是否到达最后一个节点，这样 slow.next就是倒数第n个节点，
而slow解释倒数第n个节点的前一个节点，我们可以通过设置它的next指针，实现删除倒数第n个节点即 slow.next
52 ms 98.94%
41.9 MB 6.74%
*/
var removeNthFromEnd = function(head, n) {
    let fakeHead = new ListNode(null, head) //伪头节点，用来方便当真头节点被删除的情况的处理
    let fast = fakeHead, slow = fakeHead
    for (let i = 0; i < n; i++) { //fast先走n步
        fast = fast.next
    }
    while (fast.next) { //一直移动，直到fast到达最后一个节点
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return fakeHead.next
};