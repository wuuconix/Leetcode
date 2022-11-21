function maxSubArray(nums: number[]): number {
  let ans  = -Infinity
  let count = 0
  for (let num of nums) {
    count += num
    if (count > ans) {
      ans = count
    }
    if (count < 0) {
      count = 0
    }
  }
  return ans
}

const nums = [-1, -2]
console.log(maxSubArray(nums))