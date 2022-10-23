function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = []
  const path: number[] = []
  function backtracking(targetSum: number, startIndex: number) {
    if (path.length == k && targetSum == 0) {
      result.push([...path])
    }
    if (targetSum < startIndex) {
      return
    }
    for (let i = startIndex; i < 10 - (k - path.length) + 1; i++) {
      path.push(i)
      backtracking(targetSum - i, i + 1)
      path.pop()
    }
  }
  backtracking(n, 1)
  return result
}

const k = 3, n = 7
console.log(combinationSum3(k, n))