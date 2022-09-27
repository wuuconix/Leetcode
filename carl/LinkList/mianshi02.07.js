function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let aLength = getListLength(headA), bLength = getListLength(headB)
    if (aLength < bLength) { //使得headA为链表长度长的那个
        [headA, headB] = [headB, headA];
        [aLength, bLength] = [bLength, aLength]
    }
    for (let i = 0; i < aLength - bLength; i++) {
        headA = headA.next
    }
    while(headA && headA != headB) {
        headA = headA.next
        headB = headB.next
    }
    return headA
};

function getListLength(L) {
    let count = 0
    while (L != null) {
        count++
        L = L.next
    }
    return count
}