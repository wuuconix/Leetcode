function permute1(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  function backtracing(rest: number[]) {
    if (path.length == nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0; i < rest.length; i++) {
      const restNext = [...rest]
      const item = restNext.splice(i, 1)[0]
      path.push(item)
      backtracing(restNext)
      path.pop()
    }
  }
  backtracing(nums)
  return ans
}

function permute(nums: number[]): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  const used: Set<number> = new Set()
  function backtracing() {
    if (path.length == nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used.has(nums[i])) {
        path.push(nums[i])
        used.add(nums[i])
        backtracing()
        used.delete(nums[i])
        path.pop()
      }
    }
  }
  backtracing()
  return ans
}

const nums = [1,2,3]
console.log(permute(nums))