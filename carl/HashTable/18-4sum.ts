function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a -b)
  const res: number[][] = []
  for (let i = 0; i <= nums.length - 4; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    for (let j = nums.length - 1; j >= i + 3; j--) {
      if (j < nums.length - 1 && nums[j] == nums[j + 1]) {
        continue
      }
      let left = i + 1, right = j - 1
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right] + nums[j]
        if (sum == target) {
          res.push([nums[i], nums[left], nums[right], nums[j]])
          left++
          right--
          while (nums[left] == nums[left - 1]) {
            left++
          }
          while (nums[right] == nums[right + 1]) {
            right--
          }
        } else if (sum > target) {
          right--
        } else {
          left++
        }
      }
    }
  }
  return res
}

const nums = [-2,-1,-1,1,1,2,2], target = 0
console.log(fourSum(nums, target))