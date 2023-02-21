function maxProfit(k: number, prices: number[]): number {
  const dp: number[][] = []
  dp[0] = []
  for (let i = 0; i < 2 * k; i++) {
    dp[0][i] = (i % 2 == 0 ? -prices[0] : 0)
  }
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])                       // buy the first stock
    for (let j = 1; j < 2 * k; j++) {
      if (j % 2 == 1) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]) // sell the stock
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]) // buy the stock
      }
    }
  }
  console.log(dp)
  return dp[dp.length - 1][2 * k - 1]
}

const k = 2, prices = [2,1,4,5,2,9,7]
console.log(maxProfit(k, prices))