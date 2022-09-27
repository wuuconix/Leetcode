/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 剑指 Offer II 027. 回文链表
 * 简单
 * 给定一个链表的 头节点 head ，请判断其是否为回文链表。
    如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。
    示例 1：

输入: head = [1,2,3,3,2,1]
输出: true
示例 2：

输入: head = [1,2]
输出: false
 
提示：

链表 L 的长度范围为 [1, 105]
0 <= node.val <= 9

进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * @param {ListNode} head
 * @return {boolean}
 * 和之前重排链表 26.js 一样。
 * 我们可以把链表分为左链表和右链表。
 * 右链表进行翻转。
 * 记得切换左右链表的联系。
 * 然后开始比较。
 * 168 ms 46.07%
 * 62 MB 81.49%
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
var isPalindrome = function(head) {
    let length = 0
    let p = head
    while (p) { //计算链表长度
        length++
        p = p.next
    }
    let middle = (length >> 1) + 1//链表中点的坐标
    let cur = 0
    for (let i = 0; i < middle - 1; i++) { //到达中点的前一个点
        cur = cur.next ?? head
    }
    let temp = cur.next
    cur.next = null //中断左右半链表之间的联系
    cur = temp
    let prev = null
    while (cur) { //翻转右半链表
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    let left = head, right = prev
    while (left && right) {
        if (left.val != right.val)
            return false
        left = left.next
        right = right.next
    }
    return true
};