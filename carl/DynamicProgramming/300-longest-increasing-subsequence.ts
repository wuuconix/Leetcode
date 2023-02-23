function lengthOfLIS1(nums: number[]): number {
  const dp: number[] = [1]
  const minForLength: number[] = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < minForLength.length; j++) {
      if (nums[i] <= minForLength[j]) {
        dp[i] = j + 1
        minForLength[j] = nums[i]
        break
      }
    }
    if (!dp[i]) {   // that means nums[i] bigger than every minForLength element
      dp[i] = minForLength.length + 1
      minForLength[minForLength.length] = nums[i]
    }
  }
  console.log(dp)
  return Math.max(...dp)
}

function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp)
  return Math.max(...dp)
}

const nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums))