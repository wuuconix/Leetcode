function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  const perfect: number[] = []
  for (let i = 1; i <= 100; i++) {
    perfect.push(i ** 2)
  }
  for (let i = 0; i < 100; i++) {
    for (let j = perfect[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - perfect[i]] + 1)
    }
  }
  console.log(dp)
  return dp[n]
}

const n = 11
console.log(numSquares(n))