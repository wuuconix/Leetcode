function findLengthOfLCIS(nums: number[]): number {
  const dp: number[] = [1]
  let ans: number = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
      ans = Math.max(ans, dp[i])
    } else {
      dp[i] = 1
    }
  }
  console.log(dp)
  return ans
}

const nums = [2,2,2,2,2]
console.log(findLengthOfLCIS(nums))