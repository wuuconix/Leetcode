function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((a, b) => a + b)
  if (sum % 2 == 1) {
    return false
  }
  const dp: number[] = new Array(sum / 2 + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  console.log(dp)
  return dp[sum / 2] === sum / 2
}

const nums = [1,5,11,5]
canPartition(nums)