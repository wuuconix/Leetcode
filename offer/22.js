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
 * 剑指 Offer 22. 链表中倒数第k个节点
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
    例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
    示例：
    给定一个链表: 1->2->3->4->5, 和 k = 2.
    返回链表 4->5.

 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 数组无所畏惧
 * 需要注意array.slice()的结果还是一个数组，而这道题的返回值需要的是一个节点，我们还需要手动pop
 * 时间复杂度O(n)，空间复杂度O(n)
 * 60 ms 88.37%
 * 41.6 MB 11.31%
 */
var getKthFromEnd = function(head, k) {
    let vals = []
    while (head) {
        vals.push(head)
        head = head.next
    }
    if (k == 1) {
        return vals.pop()
    } else {
        return vals.slice(-k, -k + 1).pop()
    }
};

/* 看了官方题解。
这道题的思路是 不知道链表长度的情况下，我们首先可以遍历一遍，求出链表长度。
然后再从头节点遍历到 n-k 个节点就是我们所求。
然而我们可以利用双指针，让快慢指针之间相差k个距离，当快指针到达结尾时，满指针就是我们所求。
时间复杂度O(n) 空间复杂度O(1)
68 ms 59.17%
41.5 MB 17.83%
 */
var getKthFromEnd = function(head, k) {
    let fast = head, slow = head
    for (let i = 0; i < k; i++) //fast指针先走k步
        fast = fast.next
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};