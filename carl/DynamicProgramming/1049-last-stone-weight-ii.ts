function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((a, b) => a + b)
  const wMax = Math.floor(sum / 2) + (sum % 2 == 1 ? 1 : 0)
  const dp: number[] = new Array(wMax + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = wMax; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
    console.log(dp)
  }
  // console.log(dp)
  return Math.abs(sum - 2 * dp[wMax]) 
}

const stones = [2,7,4,1,8,1]
console.log(lastStoneWeightII(stones))