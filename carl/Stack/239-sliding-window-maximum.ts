class MonoQueue {
  //implement an monotonic queue
  private que: number[]
  constructor() {
    this.que = []
  }
  push(value: number) {
    // remove all elements that less than new value
    while (this.que.length != 0 && this.que[this.que.length - 1] < value) {
      this.que.pop()
    }
    this.que.push(value)
  }
  pop(): number {
    return this.que.shift()!
  }
  front(): number {
    return this.que[0]!
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const ans: number[] = []
  const que = new MonoQueue()
  for (let i = 0; i < k; i++) {
    que.push(nums[i])
  }
  ans.push(que.front())
  for (let i = k; i < nums.length; i++) {
    if (que.front() == nums[i - k]) {
      que.pop()
    }
    que.push(nums[i])
    ans.push(que.front())
  }
  return ans
}

const nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums, k))