class MyQueue {
  private stack1: number[]
  private stack2: number[]

  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x: number): void {
    this.stack1.push(x)
  }

  pop(): number {
    if (this.stack2.length == 0 ) {
      while(this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    return this.stack2.pop()!
  }

  peek(): number {
    if (this.stack2.length == 0) {
      while(this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop()!)
      }
    }
    const temp = this.stack2.pop()!
    this.stack2.push(temp)
    return temp
  }

  empty(): boolean {
    return this.stack1.length == 0 && this.stack2.length == 0
  }
}

const que = new MyQueue()
que.push(1)
que.push(2)
console.log(que.peek())
console.log(que.pop())
console.log(que.empty())
