function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i]
    if (map.has(target - left)) {
      return [map.get(target - left), i]
    }
    if (!map.has(left)) {
      map.set(left, i)
    }
  }
  return [0, 1]
}

const nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))