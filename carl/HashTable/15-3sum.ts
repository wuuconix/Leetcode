function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const res: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let left = i + 1, right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (nums[right] == nums[right + 1]) {
          right--
        }
        while (nums[left] == nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}

const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))