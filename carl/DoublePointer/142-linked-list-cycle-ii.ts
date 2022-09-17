import { ListNode } from "./type"

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head?.next, fast = head?.next?.next
  while(fast != null && fast.next != null) {
    if (slow == fast) { //find the point that two pointers meet each other
      slow = head
      while(slow != fast) { //find the loop entrance
        slow = slow!.next
        fast = fast!.next
      }
      return slow
    } else {
      fast = fast.next.next
      slow = slow!.next
    }
  }
  return null
}