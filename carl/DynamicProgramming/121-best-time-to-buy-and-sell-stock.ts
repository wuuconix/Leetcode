/* the think way of greedy */
function maxProfit1(prices: number[]): number {
  let min = Infinity, max = -Infinity
  for (let price of prices) {
    max = Math.max(max, price - min)
    min = Math.min(price, min)
  }
  return max < 0 ? 0 : max
}

/* the think way of dp */
function maxProfit(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp[dp.length - 1][1]
}

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))