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
 * 剑指 Offer II 026. 重排链表
 * 中等
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

 L0 → L1 → … → Ln-1 → Ln 
请将其重新排列后变为：

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:

输入: head = [1,2,3,4]
输出: [1,4,2,3]

提示：

链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 没想到用双指针怎么做，感觉挺复杂的，先获取长度，然后写一个获取指定下标的节点的函数也许是一个思路。
 * 这里直接暴力哈希表了。
 * 反正时间复杂度都是O(n)
 * 88 ms 75.00%
 * 49.4 MB 19.23%
 */
var reorderList = function(head) {
    let hashTable = [] //暴力哈希表，存储所有节点
    let p = head
    while (p) {
        hashTable.push(p)
        p = p.next
    }
    for (let i = 0; i <= Math.floor(hashTable.length / 2); i++) {
        if (i + 1 < hashTable.length - 1 - i) {
            hashTable[i].next = hashTable[hashTable.length - 1 - i]
            hashTable[hashTable.length - 1 - i].next = hashTable[i + 1]
        }  else if (i + 1 == hashTable.length - 1 - i) {
            hashTable[i + 1].next = null
        } else if (i == hashTable.length - 1 - i) {
            hashTable[i].next = null
        }
    }
    return head
};

/* 80 ms 93.68%
48.8 MB 59.89%
看了题解，发现可以把链表一份为二。左半链表保持不变，右边链表进行翻转。
这让就可以同时从头开始不断合并了。
只能说为了空间复杂度为O(1)真是命都不要了！ */
var reorderList = function(head) {
    let length = 0 //首先计算链表的长度
    let p = head
    while (p) {
        length++
        p = p.next
    }
    let middle = Math.floor(length / 2) + 1 //中间节点的下标
    let prev = null, cur = head
    p = head
    for (let i = 0; i < middle - 1; i++) { //让 cur 指向中间节点的前一个节点
        cur = p
        p = p.next
    }
    let temp = cur.next //让左半链表和右半链表中断练习，方便之后合并。
    cur.next = null
    cur = temp
    while (cur) { //开始进行翻转
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    let right = prev //现在prev就指向右侧翻转后的头
    let left = head
    while (left && right) { //开始进行合并左右链表
        let leftNext = left.next
        let rightNext = right.next
        left.next = right
        right.next = (leftNext ?? right.next) //如果左链表已经结束，right可能还有，保持自己即可。
        left = leftNext
        right = rightNext
    }
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
reorderList(head)