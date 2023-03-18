function trap(height: number[]): number {
  while (height[0] == 0) {
    height.shift()
  }
  const monoStack: number[] = []
  let ans = 0
  for (let i = 0; i < height.length; i++) {
    let left: number = i
    let min: number = Infinity
    while (monoStack.length != 0 && height[monoStack[monoStack.length - 1]] <= height[i]) {
      left = monoStack.pop()!
      min = Math.min(min, height[left])
    }
    for (let j = left + 1; j < i; j++) {
      ans += (height[left] - Math.max(height[j], min))
    }
    monoStack.push(i)
  }
  return ans
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))