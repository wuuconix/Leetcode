class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type LN = ListNode | null
/* 双指针做法 */
function reverseList(head: ListNode | null): ListNode | null {
    let prev: LN = null
    let cur: LN = head
    let next: LN = null
    while (cur != null) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};

/* 递归 */
function reverseList(head: ListNode | null): ListNode | null {
    function reverse(prev: LN, cur: LN): LN {
        if (cur == null) {
            return prev
        }
        const next = cur.next
        cur.next = prev
        return reverse(cur, next)
    }
    return reverse(null, head)
};