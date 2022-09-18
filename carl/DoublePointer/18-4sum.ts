function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b)
  const ans: number[][] = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue
      }
      let left = j + 1, right = nums.length - 1
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right] + nums[j]
        if (sum < target) {
          left++
        } else if (sum > target) {
          right--
        } else {
          ans.push([nums[i], nums[left], nums[right], nums[j]])
          while (left < right && nums[left] == nums[left + 1]) {
            left++
          }
          while (left < right && nums[right] == nums[right - 1]) {
            right--
          }
          left++
          right--
        }
      }
    }
  }
  return ans
}

const nums = [2,2,2,2,2], target = 8
console.log(fourSum(nums, target))