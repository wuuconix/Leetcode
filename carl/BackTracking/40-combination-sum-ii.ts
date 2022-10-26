function combinationSum2(candidates: number[], target: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []
  let sum = 0
  function backtracking(startIndex: number) {
    if (sum == target) {
      ans.push([...path])
    }
    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
      if (i > startIndex && candidates[i] == candidates[i - 1]) {
        //cause we allow in the path has the same value candidate ...1
        //but we don't allow the two path are look just the same  ...2
        //here i == startIndex, for (1)
        //and i > startIndex, for (2)
        continue
      }
      sum += candidates[i]
      path.push(candidates[i])
      backtracking(i + 1)
      path.pop()
      sum -= candidates[i]
    }
  }
  candidates = candidates.sort((a, b) => a - b)
  backtracking(0)
  return ans
}

const candidates = [10,1,2,7,6,1,5], target = 8
const ans = combinationSum2(candidates, target)
console.log(ans)