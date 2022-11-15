function permuteUnique(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const ans: number[][] = []
  const path: number[] = []
  const usedIndex: Set<number> = new Set()
  function bakctracking() {
    if (path.length == nums.length) {
      ans.push([...path])
      return
    }
    const usedNum: Set<number> = new Set() //just in this layer
    for (let i = 0; i < nums.length; i++) {
      if (!usedIndex.has(i) && !usedNum.has(nums[i])) {
        path.push(nums[i])
        usedIndex.add(i)
        usedNum.add(nums[i])
        bakctracking()
        path.pop()
        usedIndex.delete(i)
        //usedNum no need to delete, not for backtracking, just a set in this layer
      }
    }
  }
  bakctracking()
  return ans
}

const nums = [1,1,2]
console.log(permuteUnique(nums))