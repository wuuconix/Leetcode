function maxProfit(prices: number[], fee: number): number {
  const dp: number[][] = [[0, -prices[0]]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)   // no stock
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])         // has stock
  }
  console.log(dp)
  return dp[dp.length - 1][0]
}

const prices = [1,3,7,5,10,3], fee = 3
console.log(maxProfit(prices, fee)) 