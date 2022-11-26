function largestSumAfterKNegations1(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b)
  let firstPositive = nums.length - 1 //first positive Index
  let leastAbsolute = firstPositive //least absolute Index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      firstPositive = i
      if (i == 0) {
        leastAbsolute = 0
      } else {
        if (Math.abs(nums[i - 1]) < Math.abs(nums[i])) {
          leastAbsolute = i - 1
        } else {
          leastAbsolute = i
        }
      }
      break
    }
  }
  for (let i = 0; i < k; i++) {
    if (i < firstPositive) {
      nums[i] = -nums[i]
    } else {
      nums[leastAbsolute] = -nums[leastAbsolute]
    }
  }
  return nums.reduce((prev, cur) => prev + cur)
}

function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a)) //the more abs, the aheader it place
  for (let i = 0; i < nums.length && k; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  while (k) {
    nums[nums.length - 1] = -nums[nums.length - 1]
    k--
  }
  return nums.reduce((prev, cur) => prev + cur)
}
const nums = [1], k = 2
console.log(largestSumAfterKNegations(nums, k))