function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0, right = 0, sum = 0, res = nums.length + 1
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            res = Math.min(res, right - left + 1)
            sum -= nums[left++]
        }
        right++
    }
    return res == nums.length + 1 ? 0 : res
}

let target = 11, nums = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(target, nums))