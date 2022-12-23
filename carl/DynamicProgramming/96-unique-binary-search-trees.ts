function numTrees(n: number): number {
  const nMax = 19
  const dp: number[] = new Array(nMax + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= nMax; i++) {
    for (let j = 1; j <= i; j++) {
      const leftNum = j - 1
      const rightNum = i - j
      dp[i] += dp[leftNum] * dp[rightNum]
    }
  }
  console.log(dp)
  return dp[n]
}

numTrees(3)