function maxProfit1(prices: number[]): number {
  const dp: number[][] = [[-prices[0], -Infinity, -Infinity, -Infinity]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])               // buy the first stock
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]) // has sold first stock
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]) // has bought the second stock
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]) // has sold the second stock
    if (dp[i - 1][1] == -Infinity) {
      dp[i][2] = -Infinity
    } 
    if (dp[i - 1][2] == -Infinity) {
      dp[i][3] = -Infinity
    }
  }
  return Math.max(0, ...dp[dp.length - 1])
}

function maxProfit(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0, -prices[0], 0]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])               // buy the first stock
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]) // has sold first stock
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]) // has bought the second stock
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]) // has sold the second stock
  }
  return Math.max(dp[dp.length - 1][3])
}

const prices = [3,3,5,0,0,3,1,4]
console.log(maxProfit(prices))