class MyLinkedList {

  val: number
  next: MyLinkedList | null
  length: number

  constructor(val: number = Infinity, next: MyLinkedList | null = null) {
    this.val = val
    this.next = next
    this.length = 0
  }

  get(index: number): number {
    if (index >= this.length) {
      return -1
    }
    let p = this.next
    for (let i = 0; i < index; i++) {
      p = p!.next
    }
    return p!.val
  }

  addAtHead(val: number): void {
    const node = new MyLinkedList(val)
    node.next = this.next
    this.next = node
    this.length += 1
  }

  addAtTail(val: number): void {
    if (this.length == 0) {
      this.addAtHead(val)
      return
    }
    let p = this.next
    for (let i = 1; i < this.length; i++) {
      p = p!.next
    }
    const node = new MyLinkedList(val)
    p!.next = node
    this.length += 1
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.length) {
      return
    }
    if (index == 0) {
      this.addAtHead(val)
      return
    }
    let p = this.next
    for (let i = 1; i < index; i++) {
      p = p!.next
    }
    const node = new MyLinkedList(val)
    node.next = p!.next
    p!.next = node
    this.length += 1
  }

  deleteAtIndex(index: number): void {
    if (index >= this.length) {
      return
    }
    if (index == 0) {
      this.next = this.next?.next ?? null
    } else {
      let p = this.next
      for (let i = 1; i < index; i++) {
        p = p!.next
      }
      p!.next = p!.next?.next ?? null
    }
    this.length -= 1
  }
}