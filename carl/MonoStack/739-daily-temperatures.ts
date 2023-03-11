function dailyTemperatures(temperatures: number[]): number[] {
  const ans: number[] = new Array(temperatures.length).fill(0)
  const monoStack: number[] = []
  for (let i = 0; i < temperatures.length; i++) {
    let top = monoStack[monoStack.length - 1]
    while (monoStack.length > 0 && temperatures[i] > temperatures[top]) {
      ans[top] = i - top
      monoStack.pop()
      top = monoStack[monoStack.length - 1]
    }
    monoStack.push(i)
  }
  console.log(ans)
  return ans
}

const temperatures = [30,60,90]
dailyTemperatures(temperatures)