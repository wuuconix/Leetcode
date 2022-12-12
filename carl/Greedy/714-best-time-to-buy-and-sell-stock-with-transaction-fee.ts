function maxProfit(prices: number[], fee: number): number {
  let profit = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > fee) { //make profit
      profit += (prices[i] - minPrice - fee)
      minPrice = prices[i] - fee //difference between normal stock question
    }
  }
  return profit
}

const prices = [1, 3, 2, 8, 4, 9], fee = 2
console.log(maxProfit(prices, fee))