class MyStack {

  private que1: number[]
  private que2: number[]

  constructor() {
    this.que1 = []
    this.que2 = []
  }

  push(x: number): void {
    this.que1.push(x)
  }

  pop(): number {
    while (this.que1.length != 1) {
      this.que2.push(this.que1.shift()!)
    }
    const res = this.que1.shift()!
    while (this.que2.length != 0) {
      this.que1.push(this.que2.shift()!)
    }
    return res
  }

  top(): number {
    const res = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.que1.length == 0
  }
}

class MyStack2 {
  //implement stack using only one queue

  private que: number[]

  constructor() {
    this.que = []
  }

  push(x: number): void {
    this.que.push(x)
  }

  pop(): number {
    const length = this.que.length
    for (let i = 0; i < length - 1; i++) { //shift first n - 1 element and push to queue back. then the first element is just the "stack top"
      this.que.push(this.que.shift()!)
    }
    return this.que.shift()!
  }

  top(): number {
    const res = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.que.length == 0
  }
}

const stack = new MyStack()
stack.push(1)
stack.push(2)
console.log(stack.pop())
console.log(stack.top())
console.log(stack.empty())