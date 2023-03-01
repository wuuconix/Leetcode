function maxSubArray(nums: number[]): number {
  const dp: number[] = [nums[0]]
  let ans: number = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    ans = Math.max(ans, dp[i])
  }
  console.log(dp)
  return ans
}

const nums = [1]
console.log(maxSubArray(nums))