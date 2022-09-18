function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b) //sort
  const ans: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let left = i + 1, right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        ans.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] == nums[left + 1]) { //clear dulplicate
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
  return ans
}

const nums = [0, 0, 0]
console.log(threeSum(nums))