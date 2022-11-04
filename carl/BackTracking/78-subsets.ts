function subsets(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  function backtracking(startIndex: number) {
    ans.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(0)
  return ans
}

const nums = [1,2,3]
console.log(subsets(nums))