function nextGreaterElements(nums: number[]): number[] {
  const monoStack: number[] = []
  const ans: number[] = new Array(nums.length).fill(-1)
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < nums.length; i++) {
      while (monoStack.length > 0 && nums[monoStack[monoStack.length - 1]] < nums[i]) {
        ans[monoStack[monoStack.length - 1]] = nums[i]
        monoStack.pop()
      }
      monoStack.push(i)
    }
  }
  return ans
}

const nums = [1,2,3,4,3]
console.log(nextGreaterElements(nums))