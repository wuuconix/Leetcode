class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummyHead = new ListNode()
    dummyHead.next = head
    let prev = dummyHead, cur = head
    while (cur != null) {
        if (cur.val == val) {
            prev.next = cur.next
        } else {
            prev = cur
        }
        cur = cur.next
    }
    return dummyHead.next
}

let head = null, val = 1
console.log(removeElements(null, val))
