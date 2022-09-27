/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/* 剑指 Offer 35. 复杂链表的复制
中等
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
---
这道题的难度在于处理链表中random的指向。
我的解决办法是先顺着next线构造一条主路，同时把构造好的节点们以及原节点们分别放在表里。即tableCopy和table里。
之后再从头来一遍，找他random指向在table里的index，然后把对应tableCopy[index]放到对应的random指针里。
68 ms  57.03%
42.8 MB 42.84%
*/
/**
 * @param {Node} head
 * @return {Node}
*/
var copyRandomList = function(head) {
    if (!head)
        return null
    let table = [] //存储所有的节点
    let tableCopy = []
    let cur = head
    let fake = new Node(0) //伪头
    let curCopy = fake
    while (cur) {
        table.push(cur)
        let newNode = new Node(cur.val)
        tableCopy.push(newNode)
        cur = cur.next
        curCopy.next = newNode
        curCopy = curCopy.next
    }
    cur = head
    curCopy = fake.next
    while (cur) {
        if (cur.random) {
            let index = table.indexOf(cur.random)
            curCopy.random = tableCopy[index]
        }
        cur = cur.next
        curCopy = curCopy.next
    }
    return fake.next
};

//看了题解，发现我之前的做法麻烦了，创建了两个数组。实际上可以用一个哈希表取代。
//表的键和值分别是 原节点: 新节点
//算法的思路是先把新节点都建立出来，然后最后一次遍历建立next和random的指针
//试了一下，发现js的数组的键不能以一个对象作为key。不然就会类似的效果
// let a = {name: 'wuuconix'}
// let b= {}
// b[a] = '1'
// b会变成 { '[object Object]': '1' } js会自动把一个对象变成一个字符串'[object Object]'成为键
// 其解决办法是不使用对象来模拟哈希表，而使用Map
// 本地抛出来的结果感觉挺正确的，leetcode上过不了，不管了。
var copyRandomList = function(head) {
    if (!head)
        return null
    let hashTable = new Map()
    let cur = head
    while (cur) { //遍历 建立所有节点 并且建立旧节点和新节点的映射
        hashTable.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    while (cur) { //遍历 构建next 和random
        hashTable.get(cur).next = hashTable.get(cur.next)
        hashTable.get(cur).random = hashTable.get(cur.random)
        cur = cur.next
    }
    return hashTable.get(head)
};

//这种做法很妙，但比较难想到，是在源节点后复制一个节点。
//然后target.random 就等于 origin.random.next。 可以一一得到对应。
//可以说在原地解决了办法。空间复杂度是O(1)。因为新建的节点们就是题目需要的，所以可能就不算时间复杂度。
// 68 ms 57.03%
// 42.9 MB 27.89%
var copyRandomList = function(head) {
    if (!head)
        return null
    let cur = head
    while (cur) { //复制节点
        let copy = new Node(cur.val)
        copy.next = cur.next
        cur.next = copy
        cur = copy.next
    }
    cur = head
    while (cur) { //建立random连接
        if (cur.random) //如果random不是null
            cur.next.random = cur.random.next
        cur = cur.next.next
    }
    pre = head
    cur = head.next
    let res = head.next
    while (cur.next) { //题目比较狗，还不能破坏原来链表的结构，所以需要一并处理
        pre.next = pre.next.next
        pre = pre.next
        cur.next = cur.next.next
        cur = cur.next
    }
    pre.next = null
    return res
};

let a = new Node(1)
let b = new Node(2)
a.next = b
a.random = b
b.random = b
// console.log(a)
console.log(copyRandomList(a));