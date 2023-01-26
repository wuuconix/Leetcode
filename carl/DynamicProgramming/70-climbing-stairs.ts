function climbStairs1(n: number): number {
  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
}

// using the think way of backpack problem
function climbStairs(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 2; j++) {
      dp[i] += dp[i - j]
    }
  }
  console.log(dp)
  return dp[n]
}

const n = 3
console.log(climbStairs(n))