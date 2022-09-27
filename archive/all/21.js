/** 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 这题给的参数是一个对象，不是列表，真恶心。
 * 不过也确实得这样，直接用列表就没法考察你对链表的理解了。
 * 68 ms 88.22%
 * 43.2 MB 19.43%
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) { //俩都是空的
        return list1
    }
    let head = new ListNode()
    let next = head
    while (list1 || list2) {
        if (!list1) { //list1已经无了
            next.val = list2.val
            next.next = list2.next
            break
        }
        else if (!list2) { //list2已经无了
            next.val = list1.val
            next.next = list1.next
            break
        }
        else { //都还有
            if (list1.val < list2.val) {
                next.val = list1.val
                list1 = list1.next
                next.next = new ListNode()
                next = next.next
            }
            else {
                next.val = list2.val
                list2 = list2.next
                next.next = new ListNode()
                next = next.next
            }
        }
    }
    return head
};