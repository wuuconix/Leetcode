function findTargetSumWays(nums: number[], target: number): number {
  // assume sum is nums's sum,
  // think the sum of the number which will be positive is x,
  // then the sum of the number which will be positive is (sum - x),
  // then we can get a eqaulity that "x - (sum -x) = target"
  // then we can get "x = (target + sum) / 2"
  // then change the problem to the 0, 1 package problem which make the package size to x. 
  const sum = nums.reduce((a, b) => a + b)
  if ((target + sum) % 2 == 1) {
    return 0
  } else if (Math.abs(target) > sum) {
    return 0
  }
  const x = (target + sum) / 2
  const dp: number[] = new Array(x + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = x; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  console.log(dp)
  return dp[x]
}

const nums = [1,1,1,1,1], target = 3
findTargetSumWays(nums, target)