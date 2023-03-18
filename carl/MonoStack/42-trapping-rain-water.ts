function trap(height: number[]): number {
  const monoStack: number[] = []
  let ans = 0
  monoStack.push(0)
  for (let i = 1; i < height.length; i++) {
    if (height[i] < height[monoStack[monoStack.length - 1]]) {
      monoStack.push(i)
    } else if (height[i] == height[monoStack[monoStack.length - 1]]) {
      monoStack.pop()
      monoStack.push(i)
    } else {
      while (monoStack.length != 0 && height[i] > height[monoStack[monoStack.length - 1]]) {
        const mid = monoStack.pop()!
        if (monoStack.length != 0) {
          const left = monoStack[monoStack.length - 1]
          const h = Math.min(height[left], height[i]) - height[mid]
          const w = i - left - 1
          ans += h * w
        }
      }
      monoStack.push(i)
    }
  }
  return ans
}

const height = [4,2,3]
console.log(trap(height))