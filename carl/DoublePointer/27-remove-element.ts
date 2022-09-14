function removeElement(nums: number[], val: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    //find the first element that is val from the left
    while (left <= right && nums[left] != val) {
      left++
    }
    //find the first element that is not val from the right
    while (right >= left && nums[right] == val) {
      right--
    }
    //replace the val num from the left by the non-val num from the right
    left < right && (nums[left++] = nums[right--])
  }
  return left
}

const nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))