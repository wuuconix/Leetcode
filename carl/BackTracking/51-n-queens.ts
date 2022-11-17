function solveNQueens(n: number): string[][] {
  const ans: string[][] = []
  const path: number[] = []
  function backtracking() {
    if (path.length == n) {
      const temp: string[] = []
      for (let i = 0; i < path.length; i++) {
        let ttemp = ".".repeat(n).split("")
        ttemp[path[i]] = "Q"
        temp.push(ttemp.join(""))
      }
      ans.push(temp)
      return
    }
    for (let i = 0; i < n; i++) {
      let flag = true
      for (let j = 0; j < path.length; j++) {
        if (path[j] == i || Math.abs(path[j] - i) == Math.abs(j - path.length)) {
          flag = false
          break
        }
      }
      if (flag) {
        path.push(i)
        backtracking()
        path.pop()
      }
    }
  }
  backtracking()
  return ans
}

const n = 4
console.log(solveNQueens(n))