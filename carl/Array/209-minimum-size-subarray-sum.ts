function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, sum = 0, ans = Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      ans = Math.min(ans, i - left + 1)
      sum -= nums[left]
      left++
    }
  }
  return ans == Infinity ? 0 : ans
}

const target = 7, nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums))