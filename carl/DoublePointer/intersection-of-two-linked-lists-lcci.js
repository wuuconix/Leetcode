function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  let lengthA = getListLength(headA), lengthB = getListLength(headB)
  lengthA < lengthB && ([headA, headB] = [headB, headA]) //make sure linkList A is longer than B
  let pA = headA, pB = headB
  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    pA = pA.next
  }
  while (pA != null) {
    if (pA == pB) {
      return pA
    }
    pA = pA.next
    pB = pB.next
  }
}

function getListLength(head) {
  let p = head, len = 0
  while(p != null) {
    len++
    p = p.next
  }
  return len
}
