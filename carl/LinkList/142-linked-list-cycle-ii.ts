import { ListNode, LN } from "./type"

function detectCycle(head: ListNode | null): ListNode | null {
  let fast: LN = head, slow: LN = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow!.next
    if (slow == fast) {
      slow = head
      while (slow != fast) {
        slow = slow!.next
        fast = fast!.next
      }
      return fast
    }
  }
  return null
}