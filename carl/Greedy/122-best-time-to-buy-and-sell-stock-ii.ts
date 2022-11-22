function maxProfit(prices: number[]): number {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1]
    if (profit > 0) {
      ans += profit
    }
  }
  return ans
}

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))