class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

class MyLinkedList {
    size: number
    head: ListNode | null
    tail: ListNode | null

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1
        } else {
            return this.getNode(index).val
        }
    }

    addAtHead(val: number): void {
        const newHead = new ListNode(val, this.head)
        this.head = newHead
        if (!this.tail) {
            this.tail = newHead
        }
        this.size++
    }

    addAtTail(val: number): void {
        const newTail = new ListNode(val)
        if (!this.tail) { //还没有节点的情况
            this.head = newTail
        } else {       
            this.tail.next = newTail
        }
        this.tail = newTail
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        if (index <= 0) {
            this.addAtHead(val)
        } else if (index == this.size) {
            this.addAtTail(val)
        } else if (index < this.size){
            const node = this.getNode(index - 1)
            const newNode = new ListNode(val, node.next)
            node.next = newNode
            this.size++
        }
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return
        }
        if (index == 0) {
            this.head = this.head!.next
            if (index == this.size - 1) {
                this.tail = null
            }
            this.size--
            return
        }
        let node = this.getNode(index - 1)
        node.next = node.next!.next
        if (index == this.size - 1) {
            this.tail = node
        }
        this.size--
    }

    getNode(index: number): ListNode {
        const dummyHead = new ListNode(0, this.head)
        let target = dummyHead
        for (let i = 0; i <= index; i++) {
            target = target.next! //通过增加叹号 表示target.next一定不为null
        }
        return target
    }
}