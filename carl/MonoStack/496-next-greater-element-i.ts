function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const monoStack: number[] = []
  const map: Map<number, number> = new Map()
  const ans: number[] = []
  for (let num of nums2) {
    while (monoStack.length > 0 && num > monoStack[monoStack.length - 1]) {
      const top = monoStack.pop()!
      map.set(top, num)
    }
    monoStack.push(num)
  }
  for (let num of monoStack) {
    map.set(num, -1)
  }
  for (let num of nums1) {
    ans.push(map.get(num)!)
  }
  return ans
}

const nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2))