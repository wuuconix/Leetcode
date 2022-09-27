class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type LN = ListNode | null
function swapPairs(head: ListNode | null): LN {
    const dummyHead = new ListNode(0, head)
    let cur: LN = dummyHead
    while(cur && cur.next && cur.next.next) {
        let first = cur.next
        let second = cur.next.next
        let third: LN = cur.next.next.next
        cur.next = second
        second.next = first
        first.next = third
        cur = first
    }
    return dummyHead.next
}