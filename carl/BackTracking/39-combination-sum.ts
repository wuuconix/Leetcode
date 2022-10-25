function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  let sum: number = 0
  candidates = candidates.sort((a, b) => a - b)
  function backtracking(startIndex: number) {
    if (sum == target) {
      ans.push([...path])
    }
    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) { //prune
      path.push(candidates[i])
      sum += candidates[i]
      backtracking(i)
      sum -= candidates[i]
      path.pop()
    }
  }
  backtracking(0)
  return ans
}

const candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target))