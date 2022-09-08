function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map()
  for (let num1 of nums1) {
    for (let num2 of nums2) {
      const sum = num1 + num2
      map.set(sum, map.get(sum) ? map.get(sum) + 1: 1)
    }
  }
  let count = 0
  for (let num3 of nums3) {
    for (let num4 of nums4) {
      const sum = num3 + num4
      count += map.has(-sum) ? map.get(-sum) : 0
    }
  }
  return count
}


const nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
console.log(fourSumCount(nums1, nums2, nums3, nums4))
