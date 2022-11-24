function canJump(nums: number[]): boolean {
  let max = nums[0]
  for (let i = 0; i <= max; i++) {
    max = Math.max(i + nums[i], max)
    if (max >= nums.length - 1) {
      return true
    }
  }
  return false
}

const nums = [0]
console.log(canJump(nums))