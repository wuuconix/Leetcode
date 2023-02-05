function maxProfit(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  console.log(dp)
  return dp[dp.length - 1][1]
}

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))