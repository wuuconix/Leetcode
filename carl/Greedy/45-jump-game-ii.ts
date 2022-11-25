function jump1(nums: number[]): number {
  const leastJump = new Array(nums.length).fill(null)
  leastJump[0] = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i] && i + j < nums.length; j++) {
      !leastJump[i + j] && (leastJump[i + j] = leastJump[i] + 1)
    }
  }
  return leastJump[leastJump.length - 1]
}

function jump(nums: number[]): number {
  let curMax = 0
  let nextMax = 0
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, i + nums[i])
    if (i == curMax) {
      if (i == nums.length - 1) {
        return ans 
      } else {
        ans++
        curMax = nextMax
      }
    }
  }
  return ans
}

const nums = [2,3,0,1,4]
console.log(jump(nums))