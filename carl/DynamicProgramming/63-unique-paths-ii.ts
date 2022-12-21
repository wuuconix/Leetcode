function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp: number[][] = new Array(m).fill(1).map(x => new Array(n).fill(1))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0
      } else if (i > 0 || j > 0) {
        dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i]?.[j - 1] ?? 0)
      }
    }
  }
  console.log(dp)
  return dp[m - 1][n - 1]
}

const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
uniquePathsWithObstacles(obstacleGrid)