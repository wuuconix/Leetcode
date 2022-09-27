/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 剑指 Offer 24. 反转链表 
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
     
    限制：

    0 <= 节点个数 <= 5000
 * @param {ListNode} head
 * @return {ListNode}
 * 首先想到的还是把所有的节点存进数组，然后手动改变他们的next
 * 想了一想确实有些麻烦，空间复杂度也大。
 * 个人感觉是最优解。用双指针，在遍历链表的过程中不断改变节点之间的指向。
 * 时间复杂度O(n) 空间复杂度O(1)
 * 
 * 看了题解，发现还有用递归的做法，感觉理解起来有些难度。
 * 而且递归因为用到了栈，空间复杂度较大，以后遇到这种题目还是用双指针把!
 */
var reverseList = function(head) {
    if (!head) //没有节点的情况
        return null
    let pre = head, cur = head.next
    pre.next = null //头节点的next置为null
    while (cur) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};