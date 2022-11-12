function subsetsWithDup(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const ans: number[][] = []
  const path: number[] = []
  function backtracking(startIndex: number) {
    ans.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] == nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(0)
  return ans
}

const nums = [0]
console.log(subsetsWithDup(nums))