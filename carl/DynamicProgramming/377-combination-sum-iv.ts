function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > i) {
        continue
      }
      dp[i] += dp[i - nums[j]]
    }
  }
  console.log(dp)
  return dp[target]
}

const nums = [1,2,3], target = 4
console.log(combinationSum4(nums, target))