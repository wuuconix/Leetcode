function findSubsequences(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  function backtracking(startIndex: number) {
    path.length >= 2 && ans.push([...path])
    const used: Set<number> = new Set()
    for (let i = startIndex; i < nums.length; i++) {
      if (
        !used.has(nums[i]) && //never used before
        nums[i] >= (path[path.length - 1] ?? -Infinity) //bigger than previous element in subsequence
      ) {
        used.add(nums[i])
        path.push(nums[i])
        backtracking(i + 1)
        path.pop()
      } else {
        continue
      }
    }
  }
  backtracking(0)
  return ans
}

const nums = [4,6,8, 7, 9, 7]
console.log(findSubsequences(nums))