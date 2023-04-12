import { ListNode } from "../type"

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const fakeHead: ListNode = new ListNode(0, head)
  let p: ListNode | null = fakeHead
  while (p && p.next) {
    if (p.next.val == val) {
      p.next = p.next.next
    } else {
      p = p.next            // make sure that p.next.val != val, then p can become p.next
    }                       // or, the p.next.next.val may still be val
  }
  return fakeHead.next
}