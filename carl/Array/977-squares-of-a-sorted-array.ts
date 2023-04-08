function sortedSquares1(nums: number[]): number[] {   // think from index zero to max
  if (nums[0] >= 0) {
    return nums.map(x => x ** 2)
  } else if (nums[nums.length - 1] <= 0) {
    return nums.reverse().map(x => x ** 2)
  }
  let left = 0, right = 0
  right = nums.findIndex(v => v > 0)
  left = right - 1
  const ans: number[] = []
  while (left >= 0 || right <= nums.length - 1) {
    if (right > nums.length - 1 || Math.abs(nums[left]) <= Math.abs(nums[right])) {
      ans.push(nums[left] ** 2)
      left--
    } else {
      ans.push(nums[right] ** 2)
      right++
    }
  }
  return ans
}

function sortedSquares(nums: number[]): number[] {  // think from index max to zero
  const ans: number[] = []
  let left = 0, right = nums.length - 1             // the square max is from the left or right of nums, not in the middle
  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      ans.unshift(nums[left] ** 2)
      left++
    } else {
      ans.unshift(nums[right] ** 2)
      right--
    }
  }
  return ans  
}

const nums = [-7,-3,2,3,11]
console.log(sortedSquares(nums))