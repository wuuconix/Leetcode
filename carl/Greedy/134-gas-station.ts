function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalSum = 0
  let curSum = 0
  let start = 0
  for (let i = 0; i < gas.length; i++) {
    totalSum += (gas[i] - cost[i])
    curSum += (gas[i] - cost[i])
    if (curSum < 0) {
      start = i + 1
      curSum = 0
    }
  }
  if (totalSum < 0) {
    return -1
  } else {
    return start
  }
}
const gas = [2,3,4], cost = [3,4,3]
console.log(canCompleteCircuit(gas, cost))