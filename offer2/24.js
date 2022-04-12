/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * 剑指 Offer II 024. 反转链表
 * 简单
 * 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：

输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 
提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * @param {ListNode} head
 * @return {ListNode}
 * 用双指针，两个指针间隔一，依次向后遍历。
 * 在遍历过程中改变next指针。
 * 104 ms 5.28%
 * 43 MB 38.35%
 */
var reverseList = function(head) {
    if (!head) //节点个数为0
        return null
    let slow = head, fast = head.next
    if (!fast) //节点个数为1
        return head
    else { //节点个数大于2
        head.next = null
        while (fast.next) {
            let next = fast.next
            fast.next = slow
            slow = fast
            fast = next
        }
        fast.next = slow
    }
    return fast
};

/* 优化了一下代码，去掉了一些不必要的判断，利用 prev, cur, next 增加可读度
68 ms 52.56%
42.8 MB 72.46% */
var reverseList = function(head) {
    let prev = null, cur = head
    while (cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};

/* 还可以用递归的方法写，让head.next先逆序。然后让head.next指向head。
当然了递归需要终止条件，那就是head是null或者head只有一个节点的情况下，直接返回head即可
60 ms 87.81%
43.4 MB 9.83% */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let newHead = reverseList(head.next) //递归调用，让head的next先反转好
    head.next.next = head //让head.next 指向head
    head.next = null
    return newHead
};

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
reverseList(root)