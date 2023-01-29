function rob1(nums: number[]): number {
  // dp meaning here:
  // for example dp[1] means you must include nums[1] and the max monkey you get.
  const dp: number[] = new Array(nums.length + 1).fill(0)
  let max = 0
  let oldMax = 0
  for (let [i, num] of nums.entries()) {
    if (i == 0) {
      dp[1] = num;
      [max, oldMax] = [dp[1], max]
    } else {
      if (max == dp[i]) {
        dp[i + 1] = oldMax + num
      } else {
        dp[i + 1] = max + num
      }
      if (dp[i + 1] >= max) {
        [max, oldMax] = [dp[i + 1], max]        
      }
    }
  }
  console.log(dp)
  return max
}


function rob(nums: number[]): number {
  // dp meaning:
  // dp[i] means you can choose nums[i] **or not** and the max money you get.
  // which is different from rob1 function
  const dp: number[] = []
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
  }
  console.log(dp)
  return dp[nums.length]
}

const nums = [1,1,1]
console.log(rob(nums))