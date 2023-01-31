function rob(nums: number[]): number {
  const dp1: number[] = [0, nums[0]]  // can choose nums[0] or not
  const dp2: number[] = [0, 0]  // not choose nums[0] explicitly
  for (let i = 1; i < nums.length; i++) {
    if (i != nums.length - 1) {
      dp1[i + 1] = Math.max(dp1[i], dp1[i - 1] + nums[i])
      dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + nums[i])
    } else {
      // dp1 cannot choose the final
      dp1[i + 1] = dp1[i]
      // dp2 can choose
      dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + nums[i])
    }
  }
  console.log(dp1)
  console.log(dp2)
  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
}

const nums = [1,2,3]
console.log(rob(nums))