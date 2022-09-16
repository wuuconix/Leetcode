import { ListNode } from "./type"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(0, head)
  let slow = dummyHead, fast: ListNode | null = dummyHead
  for (let i = 0; i <= n; i++) {
    fast = fast.next!
  }
  while (fast != null) {
    fast = fast.next
    slow = slow.next!
  }
  slow.next = slow.next!.next
  return dummyHead.next
}