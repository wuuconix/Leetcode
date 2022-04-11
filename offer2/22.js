/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 剑指 Offer II 022. 链表中环的入口节点
 * 中等
 * 给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。
 
示例 1：

https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
 * @param {ListNode} head
 * @return {ListNode}
 * easy题目。
 * 直接哈希表把这些节点都存起来，发现某个节点重复的时候，那个 节点就是环的入口。
 */
var detectCycle = function(head) {
    let hashTable = new Map() //键为节点，值为节点的下标
    let p = head
    while (p) {
        if (!hashTable.has(p)) {
            hashTable.set(p, 1)
            p = p.next
        } else {
            return p
        }
    }
    return null
};

/* 快慢指针
满指针每次走一步，快指针每次走两步。
假设它们重合的时候，慢指针走了k步，那么快指针走了2k步。
很显然。因为它们在环外面的路径是有昂的，所以快指针多走的k步 应该是 n 倍的环长。
假设它们的相遇点 距离环的起点 为m。
我们把满指针重新放到起点，快指针步幅调整为 1，它们同时启动。
当它们相遇的时候就是起点位置。
因为 起点 到环的入口是 k - m。
而 因为 k 是环的长度，快指针走 k步就会回到相遇点，而 少走m步，也就到达了环的起点。
所以 走 k - m 步它们就会再环起点相遇。
至于 m 到底是多少，我们不得而知，我们利用的规律是 k -m = k - m
76 ms 69.19%
43.8 MB 33.33% */
var detectCycle = function(head) {
    let slow = head, fast = head //快慢指针。慢指针每次走一步。快指针每次走两步
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) { //第一次相遇
            slow = head
            while (slow != fast) { //同速前进
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};