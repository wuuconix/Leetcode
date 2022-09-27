class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

    type LN = ListNode | null
    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        const dummyHead = new ListNode()
        dummyHead.next = head
        let slow: LN = dummyHead, fast: LN = dummyHead
        for (let i = 0; i <= n; i++) {
            fast = fast.next!
        }
        while (fast != null) {
            slow = slow!.next
            fast = fast.next
        }
        slow!.next = slow!.next!.next
        return dummyHead.next
    };