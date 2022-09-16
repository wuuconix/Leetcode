import { ListNode } from "./type"

/**
 * basic double point way
 * @param head 
 * @returns 
 */
function reverseList1(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head,
    prev: ListNode | null = null
  while (cur != null) {
    const temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}

/**
 * recur way
 * @param head 
 * @returns 
 */
function reverseList(head: ListNode | null): ListNode | null {
  return reverse(null, head)
}

/**
 * reverse given prev and cur list node, and return the final reversed list head
 * @param prev 
 * @param cur 
 */
function reverse(prev: ListNode | null, cur: ListNode | null): ListNode | null {
  if (cur == null) { //prev is the final reversed list head
    return prev
  }
  const temp = cur.next
  cur.next = prev //reverse
  return reverse(cur, temp) //use recur to return the final reversed list head
}