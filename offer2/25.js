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
 * 剑指 Offer II 025. 链表中的两数相加
 * 中等
 * 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
    可以假设除了数字 0 之外，这两个数字都不会以零开头。
    示例1：

    https://pic.leetcode-cn.com/1626420025-fZfzMX-image.png

    输入：l1 = [7,2,4,3], l2 = [5,6,4]
    输出：[7,8,0,7]
    示例2：

    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[8,0,7]
    示例3：

    输入：l1 = [0], l2 = [0]
    输出：[0]
     
    提示：

    链表的长度范围为 [1, 100]
    0 <= node.val <= 9
    输入数据保证链表代表的数字无前导 0
     
    进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 这道题是用链表来模拟两个十进制的加法。
 * 会设计到进位。
 * 由于两个链表的长度不一样，而十进制是需要从末尾开始加的。所以这里先对两个链表进行翻转（也是看到进阶的提示想到的233
 * 翻转号后把 l1, l2 切换成 l1是那个长的链表，l2是哪个短的。
 * 然后就从头开始加了，注意进位，然后到尾部那里如果还有进位，需要再添加一个节点。
 * 116 ms 46.7 MB	
 */
var addTwoNumbers = function(l1, l2) {
    l1= reverse(l1)
    l2 = reverse(l2)
    if (count(l1) < count(l2)) {
        let temp = l1
        l1 = l2
        l2 = temp
    }
    let p = l1, q = l2
    let c = 0 //用来存储进位
    while (p.next) {
        if (q) {
            let newC = Math.floor((p.val + q.val + c) / 10)
            p.val = (p.val + q.val + c) % 10
            c = newC
            p = p.next
            q = q.next
        } else {
            let newC = Math.floor((p.val + c) / 10)
            p.val = (p.val + c) % 10
            c = newC
            p = p.next
        }
    }
    if (q) {
        let newC = Math.floor((p.val + q.val + c) / 10)
        p.val = (p.val + q.val + c) % 10
        c = newC
        if (c > 0)
            p.next = new ListNode(c)
    } else {
        let newC = Math.floor((p.val + c) / 10)
        p.val = (p.val + c) % 10
        c = newC
        if (c > 0)
            p.next = new ListNode(c)
    }
    return reverse(l1)
};

let reverse = (root) => { //翻转链表
    let prev = null, cur = root
    while (cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

let count = (root) => { //计算链表中节点的个数
    let ans = 0
    while (root) {
        ans++
        root = root.next
    } 
    return ans
}

/* 利用空值合并运算符减少代码量，更加清楚。
不用再判断哪个长哪个短了。
96 ms 75.64%
46.1 MB 68.55% */
var addTwoNumbers = function(l1, l2) {
    l1= reverse(l1)
    l2 = reverse(l2)
    let head = new ListNode(-1) //伪头节点
    let p = head
    let c = 0
    while (l1 || l2) {
        let sum = (l1.val ?? 0) + (l2.val ?? 0) + c
        if (sum >= 10) { //十进制数的进位最多进1
            sum %= 10
            c = 1
        } else {
            c = 0
        }
        p.next = new ListNode(sum)
        p = p.next
        l1 = (l1.next ?? 0) // 0.next 会返回undefined 刚好利用 ??运算符
        l2 = (l2.next ?? 0)
    }
    if (c == 1) {
        p.next = new ListNode(c)
    }
    return reverse(head.next)
};

let root = new ListNode(7)
root.next = new ListNode(2)
root.next.next = new ListNode(4)
root.next.next.next = new ListNode(3)

let root2 = new ListNode(5)
root2.next = new ListNode(6)
root2.next.next = new ListNode(4)

addTwoNumbers(root, root2)