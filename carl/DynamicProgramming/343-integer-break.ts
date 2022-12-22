function integerBreak(n: number): number {
  const NMax = 58
  const dp: number[] = new Array(NMax + 1).fill(1)
  for (let i = 2; i <= NMax; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]))
    }
  }
  console.log(dp)
  return dp[n]
}

console.log(integerBreak(10))