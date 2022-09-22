function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map()
  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(a => a[0])
}

const nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k))