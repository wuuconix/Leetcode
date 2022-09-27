/**
 * 83. 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 输入：head = [1,1,2]
    输出：[1,2]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 看到这种链表就烦，因为自己没法测试程序是否正确
 * 
 * 
 */
 var deleteDuplicates = function(head) {
    let getNext = (watch) => {
        let next = watch.next
        while (next && next.val == watch.val) {
            next = next.next
        }
        return next
    }
    let watch = head
    while (watch) {
        watch.next = getNext(watch)
        watch = watch.next
    }
    return head
};