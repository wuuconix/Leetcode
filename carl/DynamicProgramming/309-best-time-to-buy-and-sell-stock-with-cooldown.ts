function maxProfit(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0, 0]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])   // has stock
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2])               // having no stock but not sold today
    dp[i][2] = Math.max(dp[i - 1][0] + prices[i])                 // having no stock and sold today
  }
  console.log(dp)
  return Math.max(...dp[dp.length - 1])
}

const prices = [2,1]
console.log(maxProfit(prices))