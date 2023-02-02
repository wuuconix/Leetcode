function maxProfit(prices: number[]): number {
  let min = Infinity, max = -Infinity
  for (let price of prices) {
    max = Math.max(max, price - min)
    min = Math.min(price, min)
  }
  return max < 0 ? 0 : max
}

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))