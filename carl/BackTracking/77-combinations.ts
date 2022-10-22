function combine(n: number, k: number): number[][] {
  const result: number[][] = []
  const path: number[] = []
  function backtracking(n: number, k: number, start: number) {
    if (path.length == k) {
      result.push([...path]) //pay attention to this
      return
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) { //prune leaf
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop()
    }
  }
  backtracking(n, k, 1)
  return result
}

console.log(combine(4, 2))