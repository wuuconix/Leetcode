function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = new Array(cost.length + 1)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0)
  }
  return dp[dp.length - 1]
}

const cost = [1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost))