function candy(ratings: number[]): number {
  const nums = new Array<number>(ratings.length).fill(1)
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      nums[i] = nums[i - 1] + 1
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      nums[i] = Math.max(nums[i], nums[i + 1] + 1)
    }
  }
  return nums.reduce((a, b) => a + b)
}

const ratings = [1,2,2]
console.log(candy(ratings))