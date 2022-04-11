/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 剑指 Offer II 023. 两个链表的第一个重合节点
 * 简单
 * 给定两个单链表的头节点 headA 和 headB ，请找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

图示两个链表在节点 c1 开始相交：

https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

示例 1：

https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 这道题之前在offer1中做过，方法是把路拼起来。
 * 两个指针走的路变成同样长的，这样它们相遇的时候，就是重合节点的位置。
 */
var getIntersectionNode = function(headA, headB) {
    let pa = headA, pb = headB
    while (pa != pb) {
        if (!pa.next && !flaga) { //第一次遇到null，从headB再走一次
            pa = headB
            flaga = true
        }
        else {
            pa = pa.next
        }
        if (!pb.next && !flagb) { //第一次遇到null，从headA再走一次
            pb = headA
            flagb = true
        }
        else {
            pb = pb.next
        }
    }
    return pa
};

/* 简单写法，让pa和pb可以进入null。
这样就不用判断它们是否第一次遇到null了。
路径拼接后，如果没有环，它们一定会同时进入null中。
96 m 25.81%
48.2 MB 69.06% */
var getIntersectionNode = function(headA, headB) {
    let pa = headA, pb = headB
    while (pa != pb) {
        pa = !pa ? headB : pa.next
        pb = !pb ? headA : pb.next
    }
    return pa
};