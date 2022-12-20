function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(0).map(x => new Array(n).fill(1)) //each element init as 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  // console.log(dp)
  return dp[m - 1][n - 1]
}

uniquePaths(3, 3)