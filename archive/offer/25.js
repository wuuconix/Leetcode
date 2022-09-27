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
 * 剑指 Offer 25. 合并两个排序的链表
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

    示例1：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
    限制：

    0 <= 链表长度 <= 1000

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 这应该是归并排序里的归并操作
 * 个人感觉应该是最优解，就是代码写的有点冗余，太长了
 * 特别是一开始头节点那里的代码。
 * 84 ms 63.84%
 * 46.3 MB 5.04%
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) //俩空链表
        return null
    else if (l1 && !l2)
        return l1
    else if (l2 && !l1)
        return l2
    else { //两个链表都有节点的情况
        let head = null
        if (l1.val <= l2.val) {
            head = new ListNode(l1.val)
            l1 = l1.next
        }
        else {
            head = new ListNode(l2.val)
            l2 = l2.next
        }
        let cur = head
        let newNode = null
        while (l1 && l2) { //两者都还有的时候
            if (l1.val <= l2.val) {
                newNode = new ListNode(l1.val)
                l1 = l1.next
            }
            else {
                newNode = new ListNode(l2.val)
                l2 = l2.next
            }
            cur.next = newNode
            cur = newNode
        }
        if (l1)
            cur.next = l1
        else if (l2)
            cur.next = l2
        return head
    }
};
/* 
    参考题解后了解可以用伪节点来简化代码。
    同时不再手动新建ListNode，而直接指向。进一步缩小空间所需。
 */
var mergeTwoLists = function(l1, l2) {
    let fake = new ListNode(0)
    let cur = fake //伪头节点
    while (l1 && l2) { //两者都还有的时候
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        }
        else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    if (l1)
        cur.next = l1
    else if (l2)
        cur.next = l2
    return fake.next
};

console.log(mergeTwoLists(l1, l2));