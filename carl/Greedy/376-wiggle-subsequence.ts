function wiggleMaxLength(nums: number[]): number {
  let ans = 1
  let preDiff = 0
  let curDiff = 0
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1]
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      ans++
      preDiff = curDiff
    }
  }
  return ans
}

const nums = [1,7,4,9,2,5]
console.log(wiggleMaxLength(nums))